import axios from 'axios';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js/lib/common'
import config from 'config'

const BASE_URL = 'codeforces.com'
const req = axios.create({
    withCredentials: true
})

async function login() {
    let res = await req.get(`https://${BASE_URL}/enter`)
    const $ = cheerio.load(res.data);
    let csrf_token = $('meta[name="X-Csrf-Token"]').attr('content');
    console.log(csrf_token);
    let post_data = {
        csrf_token: csrf_token,
        action: 'enter',
        ftaa: '',
        bfaa: '',
        handleOrEmail: config.get('username'),
        password: config.get('password'),
        remember: []
    }
    res = await req.post(`https://${BASE_URL}/enter?back=%2F`, post_data)
    console.log(res.headers)
}

async function is_login()  {
    let res = await req.get(`https://${BASE_URL}`)
    if (res.data.indexOf('logout">Logout</a>') !== -1) {
        return true;
    }
    return false;
}

/** @type {import('../../$types').PageServerLoad} */
export async function load({ params }) {
    // await login();
    // if (await is_login()) {
    //     console.log('login successful!');
    // } else {
    //     console.log('login failed!');
    // }
    let submission = await req.get(`https://${BASE_URL}/gym/${params.gym}/submission/${params.submission}`, { 
        // withCredentials: true 
        headers: {
            Cookie: process.env.CF_COOKIE || config.get('cookie'),
        }
    });
    const $ = cheerio.load(submission.data);

    let source_node = $('#program-source-text');
    let code = source_node.text();
    let lang = source_node.attr('class')?.split(' ')[1]
    lang = lang?.substring(lang.indexOf('-') + 1)

    let hl_code = hljs.highlight(code, { language: lang }).value;

    return {
        gym: params.gym,
        submission: params.submission,
        code: hl_code
    };
}
