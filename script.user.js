// ==UserScript==
// @name        GYM code view - codeforces.com
// @namespace   Violentmonkey Scripts
// @match       https://codeforces.com/gym/*/status
// @match       https://codeforces.com/submissions/*
// @grant       MIT
// @version     1.3
// @author      Thallium54
// @run-at      document-idle
// @description 查看Codeforces GYM中的代码
// ==/UserScript==

$(function () {
    'use strict';
    let $tbody = $('table.status-frame-datatable>tbody');
    let tr = $tbody.find('tr');
    let reg = /\d+/g;
    for (let i = 1; i < tr.length; ++i) {
        let td = $(tr[i]).find('td');
        let submissionId = tr[i].dataset.submissionId;
        let cell = $(td[0]).find('span.hiddenSource');
        let problem = $(td[3]).children("a").get(0).getAttribute('href');
        let contestId = problem.match(reg);
        if (cell.length > 0) {
            let item = document.createElement("a");
            item.href = `https://gym-viewer.tgc54.com/gym/${contestId}/submission/${submissionId}`;
            item.text = `${submissionId}`;
            item.target = '_blank';
            cell.after(item);
            cell.remove();
        }
    }
});
