﻿tinymce.PluginManager.add("example", function (e) {
    e.addButton("example", {
        text: "My button",
        icon: !1,
        onclick: function () {
            e.windowManager.open({
                title: "Example plugin",
                body: [{
                    type: "textbox",
                    name: "title",
                    label: "Title"
                }],
                onsubmit: function (t) {
                    e.insertContent("Title: " + t.data.title)
                }
            })
        }
    }), e.addMenuItem("example", {
        text: "Example plugin",
        context: "tools",
        onclick: function () {
            e.windowManager.open({
                title: "TinyMCE site",
                url: "http://www.baidu.com",
                width: 800,
                height: 600,
                buttons: [{
                    text: "Close",
                    onclick: "close"
                }]
            })
        }
    })
});