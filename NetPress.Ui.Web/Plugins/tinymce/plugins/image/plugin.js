﻿tinymce.PluginManager.add("image", function (e) {
    function t(e, t) {
        function n(e, n) {
            i.parentNode.removeChild(i), t({
                width: e,
                height: n
            })
        }
        var i = new Image;
        i.onload = function () {
            n(i.clientWidth, i.clientHeight)
        }, i.onerror = function () {
            n()
        }, i.src = e;
        var o = i.style;
        o.visibility = "hidden", o.position = "fixed", o.bottom = o.left = 0, o.width = o.height = "auto", document.body.appendChild(i)
    }
    function n(t) {
        return function () {
            var n = e.settings.image_list;
            "string" == typeof n ? tinymce.util.XHR.send({
                url: n,
                success: function (e) {
                    t(tinymce.util.JSON.parse(e))
                }
            }) : t(n)
        }
    }
    function i(n) {
        function i() {
            var e = [{
                text: "None",
                value: ""
            }];
            return tinymce.each(n, function (t) {
                e.push({
                    text: t.text || t.title,
                    value: t.value || t.url,
                    menu: t.menu
                })
            }), e
        }
        function o(e) {
            var t, n, i, o;
            t = c.find("#width")[0], n = c.find("#height")[0], i = t.value(), o = n.value(), c.find("#constrain")[0].checked() && d && m && i && o && (e.control == t ? (o = Math.round(i / d * o), n.value(o)) : (i = Math.round(o / m * i), t.value(i))), d = i, m = o
        }
        function a() {
            function t(t) {
                function i() {
                    t.onload = t.onerror = null, e.selection.select(t), e.nodeChanged()
                }
                t.onload = function () {
                    n.width || n.height || g.setAttribs(t, {
                        width: t.clientWidth,
                        height: t.clientHeight
                    }), i()
                }, t.onerror = i
            }
            var n = c.toJSON();
            "" === n.width && (n.width = null), "" === n.height && (n.height = null), "" === n.style && (n.style = null), n = {
                src: n.src,
                alt: n.alt,
                width: n.width,
                height: n.height,
                style: n.style
            }, f ? g.setAttribs(f, n) : (n.id = "__mcenew", e.insertContent(g.createHTML("img", n)), f = g.get("__mcenew"), g.setAttrib(f, "id", null)), t(f)
        }
        function l(e) {
            return e && (e = e.replace(/px$/, "")), e
        }
        function r() {
            t(this.value(), function (e) {
                e.width && e.height && (d = e.width, m = e.height, c.find("#width").value(d), c.find("#height").value(m))
            })
        }
        function s() {
            function e(e) {
                return e.length > 0 && /^[0-9]+$/.test(e) && (e += "px"), e
            }
            var t = c.toJSON(),
				n = g.parseStyle(t.style);
            delete n.margin, n["margin-top"] = n["margin-bottom"] = e(t.vspace), n["margin-left"] = n["margin-right"] = e(t.hspace), n["border-width"] = e(t.border), c.find("#style").value(g.serializeStyle(g.parseStyle(g.serializeStyle(n))))
        }
        var c, u, d, m, h, g = e.dom,
			f = e.selection.getNode();
        d = g.getAttrib(f, "width"), m = g.getAttrib(f, "height"), "IMG" != f.nodeName || f.getAttribute("data-mce-object") ? f = null : u = {
            src: g.getAttrib(f, "src"),
            alt: g.getAttrib(f, "alt"),
            width: d,
            height: m
        }, n && (h = {
            name: "target",
            type: "listbox",
            label: "Image list",
            values: i(),
            onselect: function (e) {
                var t = c.find("#alt");
                (!t.value() || e.lastControl && t.value() == e.lastControl.text()) && t.value(e.control.text()), c.find("#src").value(e.control.value())
            }
        });
        var p = [{
            name: "src",
            type: "filepicker",
            filetype: "image",
            label: "Source",
            autofocus: !0,
            onchange: r
        },
		h,
		{
		    name: "alt",
		    type: "textbox",
		    label: "Image description"
		}, {
		    type: "container",
		    label: "Dimensions",
		    layout: "flex",
		    direction: "row",
		    align: "center",
		    spacing: 5,
		    items: [{
		        name: "width",
		        type: "textbox",
		        maxLength: 3,
		        size: 3,
		        onchange: o
		    }, {
		        type: "label",
		        text: "x"
		    }, {
		        name: "height",
		        type: "textbox",
		        maxLength: 3,
		        size: 3,
		        onchange: o
		    }, {
		        name: "constrain",
		        type: "checkbox",
		        checked: !0,
		        text: "Constrain proportions"
		    }]
		}];
        e.settings.image_advtab ? (f && (u.hspace = l(f.style.marginLeft || f.style.marginRight), u.vspace = l(f.style.marginTop || f.style.marginBottom), u.border = l(f.style.borderWidth), u.style = e.dom.serializeStyle(e.dom.parseStyle(e.dom.getAttrib(f, "style")))), c = e.windowManager.open({
            title: "Insert/edit image",
            data: u,
            bodyType: "tabpanel",
            body: [{
                title: "General",
                type: "form",
                items: p
            }, {
                title: "Advanced",
                type: "form",
                pack: "start",
                items: [{
                    label: "Style",
                    name: "style",
                    type: "textbox"
                }, {
                    type: "form",
                    layout: "grid",
                    packV: "start",
                    columns: 2,
                    padding: 0,
                    alignH: ["left", "right"],
                    defaults: {
                        type: "textbox",
                        maxWidth: 50,
                        onchange: s
                    },
                    items: [{
                        label: "Vertical space",
                        name: "vspace"
                    }, {
                        label: "Horizontal space",
                        name: "hspace"
                    }, {
                        label: "Border",
                        name: "border"
                    }]
                }]
            }],
            onSubmit: a
        })) : c = e.windowManager.open({
            title: "Edit image",
            data: u,
            body: p,
            onSubmit: a
        })
    }
    e.addButton("image", {
        icon: "image",
        tooltip: "Insert/edit image",
        onclick: n(i),
        stateSelector: "img:not([data-mce-object])"
    }), e.addMenuItem("image", {
        icon: "image",
        text: "Insert image",
        onclick: n(i),
        context: "insert",
        prependToContext: !0
    })
});