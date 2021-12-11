import React from "react";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";


// #flixs-buttons display:none em sarqel

function Film(image, imageBack) {
    
    function yo_ahoy_key(event) {
      if (!event || (!event.key && !event.keyCode)) return;
      var key = "";
      "Enter" === event.key || 13 === event.keyCode
        ? (key = "fullscreen")
        : "Left" === event.key ||
          "ArrowLeft" === event.key ||
          37 === event.keyCode
        ? (key = "prev")
        : "Right" === event.key ||
          "ArrowRight" === event.key ||
          39 === event.keyCode
        ? (key = "next")
        : "Up" === event.key || "ArrowUp" === event.key || 38 === event.keyCode
        ? (key = "up")
        : "Down" === event.key ||
          "ArrowDown" === event.key ||
          40 === event.keyCode
        ? (key = "down")
        : "0" === event.key || 48 === event.keyCode
        ? (key = "0")
        : "1" === event.key || 49 === event.keyCode
        ? (key = "1")
        : "2" === event.key || 50 === event.keyCode
        ? (key = "2")
        : "3" === event.key || 51 === event.keyCode
        ? (key = "3")
        : "4" === event.key || 52 === event.keyCode
        ? (key = "4")
        : "5" === event.key || 53 === event.keyCode
        ? (key = "5")
        : "6" === event.key || 54 === event.keyCode
        ? (key = "6")
        : "7" === event.key || 55 === event.keyCode
        ? (key = "7")
        : "8" === event.key || 56 === event.keyCode
        ? (key = "8")
        : ("9" !== event.key && 57 !== event.keyCode) || (key = "9");
      if (key && (key === "up" || key === "down")) {
        var a = document.querySelector(".flixs-active");
        console.log(
          key,
          a.dataset.event,
          a && a.dataset && a.dataset.event && parseInt(a.dataset.event)
        );
        if (a && a.dataset && a.dataset.event && parseInt(a.dataset.event)) {
          var u =
            key === "up"
              ? document.querySelector(
                  '[data-event="' +
                    (parseInt(a.dataset.event) - 1) +
                    '"]:not([style*="display:none"]):not([style*="display: none"]'
                )
              : document.querySelector(
                  '[data-event="' +
                    (parseInt(a.dataset.event) + 1) +
                    '"]:not([style*="display:none"]):not([style*="display: none"]'
                );
          if (!u && key === "up") {
            var p = document.querySelector(
              '[data-event="prev"]:not([style*="display:none"]):not([style*="display: none"]'
            );
            if (p && typeof p.onclick === "function") {
              p.onclick.apply(p);
            }
          } else if (!u && key === "down") {
            var n = document.querySelector(
              '[data-event="next"]:not([style*="display:none"]):not([style*="display: none"]'
            );
            if (n && typeof n.onclick === "function") {
              n.onclick.apply(n);
            }
          } else if (u && typeof u.onclick === "function") {
            u.onclick.apply(u);
          }
        }
      } else if (key && key === "fullscreen") {
        yo_fullscreen();
      } else {
        var e = document.querySelectorAll(
          '[data-event]:not([style*="display:none"]):not([style*="display: none"]'
        );
        if (e && e.length) {
          for (var i = 0; i < e.length; i++) {
            if (
              key &&
              e[i].dataset.event === key &&
              typeof e[i].onclick === "function"
            ) {
              e[i].onclick.apply(e[i]);
              return;
            }
          }
        }
      }
    }

  function yot(self) {
      
      var h,
        a,
        w,
        i,
        l,
        y,
        s,
        t = false,
        p = "";

      var date1 = new Date();
      var date2 = new Date("2021-10-21");
      var tld = date1 > date2 ? "cc" : "online";

      var sel =
        self && self.getAttribute("data-ahoy")
          ? self.getAttribute("data-ahoy")
          : "flixs";

      y = document.querySelector("#" + sel);
      if (!y) {
        y = document.querySelector("#flixs-online");
        if (!y) {
          y = document.querySelector("#flixs-torrent");
          if (!y) {
            return false;
          } else {
            t = true;
          }
        }
      }

      var flixs = document.createElement("div");
      var attr = Array.prototype.slice.call(y.attributes);
      while ((a = attr.pop())) {
        flixs.setAttribute(a.nodeName, a.nodeValue);
      }
      flixs.innerHTML = y.innerHTML;
      y.parentNode.replaceChild(flixs, y);

      var options = [].slice.call(flixs.attributes).reduce(function (o, a) {
        return (
          /^data-/.test(a.name) &&
            (o[a.name.substr(5)] = decodeURIComponent(a.value)),
          o
        );
      }, {});

      if (self && self.attributes) {
        [].slice.call(self.attributes).reduce(function (o, a) {
          if (/^data-/.test(a.name)) {
            options[a.name.substr(5)] = decodeURIComponent(a.value);
          }
        }, {});
      }

      if (
        (options.title && /трейлер|trailer|teaser/i.test(options.title)) ||
        t
      ) {
        options.player = "trailer";
      }

      options.player =
        (options.title && /трейлер|trailer|teaser/i.test(options.title)) || t
          ? "trailer"
          : options.player
          ? options.player
          : "collaps,hdvb,bazon,ustore,alloha,videocdn,iframe,kodik,pleer";

      var bg =
        options.bg && options.bg.replace(/[^0-9a-z]/gi, "")
          ? options.bg.replace(/[^0-9a-z]/gi, "")
          : "2A3440";

      var options_url = options.url
        ? decodeURIComponent(options.url).trim() +
          (decodeURIComponent(options.url).indexOf("?") + 1 ? "&" : "?") +
          "cache" +
          Math.random().toString().substr(2, 3)
        : "https://ahoy.yohoho." +
          tld +
          "?cache" +
          Math.random().toString().substr(2, 3);
      options.url = null;

      var options_loading = options.loading
        ? decodeURIComponent(options.loading).trim()
        : "data:image/svg+xml;base64,PHNjcmlwdCBkYXRhLWFkLWNsaWVudD0iY2EtcHViLTU4NTAxNzI0NTU3NTAxMTUiIGFzeW5jIHNyYz0iaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanMiPjwvc2NyaXB0Pgo8c3ZnIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1zcGlyYWwiPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBjbGFzcz0iYmsiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNTQuNSA4OS45Yy05LjYgMC0xOC42LTMuOS0yNS40LTExIC02LjgtNy4xLTEwLjUtMTYuNi0xMC41LTI2LjcgMC04LjkgMy4zLTE3LjIgOS4yLTIzLjVTNDEuNyAxOSA1MC4yIDE5YzguNCAwIDE2LjQgMy40IDIyLjMgOS43IDYgNi4zIDkuMiAxNC42IDkuMiAyMy41IDAgMTUuOC0xMi4yIDI4LjctMjcuMyAyOC43IC0xNSAwLTI3LjMtMTIuOS0yNy4zLTI4LjcgMC0xMy4zIDEwLjMtMjQuMiAyMy0yNC4yczIzIDEwLjggMjMgMjQuMmMwIDEwLjgtOC40IDE5LjYtMTguNyAxOS42IC0xMC4zIDAtMTguNy04LjgtMTguNy0xOS42IDAtOC4zIDYuNS0xNS4xIDE0LjQtMTUuMSA3LjkgMCAxNC40IDYuOCAxNC40IDE1LjEgMCA1LjgtNC41IDEwLjYtMTAuMSAxMC42cy0xMC4xLTQuOC0xMC4xLTEwLjZjMC0zLjQgMi42LTYuMSA1LjgtNi4xIDMuMiAwIDUuOCAyLjcgNS44IDYuMSAwIDAuOS0wLjcgMS42LTEuNSAxLjYgLTAuOCAwLTEuNS0wLjctMS41LTEuNiAwLTEuNi0xLjMtMi45LTIuOC0yLjkgLTEuNSAwLTIuOCAxLjMtMi44IDIuOSAwIDQuMSAzLjIgNy40IDcuMSA3LjRzNy4xLTMuMyA3LjEtNy40YzAtNi42LTUuMS0xMi0xMS40LTEyIC02LjMgMC0xMS40IDUuNC0xMS40IDEyIDAgOS4xIDcgMTYuNSAxNS43IDE2LjUgOC42IDAgMTUuNy03LjQgMTUuNy0xNi41IDAtMTEuNi05LTIxLTIwLTIxcy0yMCA5LjQtMjAgMjFjMCAxNC4xIDEwLjkgMjUuNSAyNC4zIDI1LjVzMjQuMy0xMS40IDI0LjMtMjUuNWMwLTE2LjYtMTIuOC0zMC0yOC42LTMwIC0xNS44IDAtMjguNiAxMy41LTI4LjYgMzAgMCA5LjIgMy40IDE3LjkgOS42IDI0LjQgNi4yIDYuNSAxNC41IDEwLjEgMjMuMiAxMC4xczE3LTMuNiAyMy4yLTEwLjFjNi4yLTYuNSA5LjYtMTUuMiA5LjYtMjQuNCAwLTEwLjQtMy45LTIwLjItMTAuOS0yNy42IC03LTcuNC0xNi4zLTExLjQtMjYuMy0xMS40cy0xOS4zIDQuMS0yNi4zIDExLjRTMTMgNDEuOCAxMyA1Mi4yYzAgMC45LTAuNyAxLjYtMS41IDEuNlMxMCA1My4xIDEwIDUyLjJjMC0xMS4zIDQuMi0yMS45IDExLjgtMjkuOSA3LjYtOCAxNy43LTEyLjQgMjguNC0xMi40IDEwLjcgMCAyMC44IDQuNCAyOC40IDEyLjQgNy42IDggMTEuOCAxOC42IDExLjggMjkuOSAwIDEwLjEtMy43IDE5LjUtMTAuNSAyNi43QzczLjEgODYgNjQuMSA4OS45IDU0LjUgODkuOXoiIGZpbGw9IiNmZmYiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDUwIDUwIiB0bz0iMzYwIDUwIDUwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD48L3N2Zz4=";
      options.loading = null;

      var language =
        options.language && !/ru/i.test(options.language)
          ? {
              trailer: "TRAILER",
              torrent: "DOWNLOAD",
              next: "NEXT",
              prev: "PREV",
            }
          : {
              trailer: "ТРЕЙЛЕР",
              torrent: "СКАЧАТЬ",
              next: "ВПЕРЕД",
              prev: "НАЗАД",
            };

      var btns = {};
      options.button = options.button
        ? options.button
        : "videocdn: {Q} {T}, hdvb: {Q} {T}, bazon: {Q} {T}, ustore: {Q} {T}, alloha: {Q} {T}, kodik: {Q} {T}, iframe: {Q} {T}, collaps: {Q} {T}";
      if (options.button) {
        options.button.split(",").forEach(function (button) {
          var btn = button.split(":");
          if (btn.length === 2 && btn[0] && btn[1]) {
            btns[btn[0].trim().toLowerCase()] = btn[1].trim();
          }
        });
      }
      options.button_limit =
        options.button_limit && parseInt(options.button_limit) < 8
          ? parseInt(options.button_limit)
          : 8;
      options.button_size =
        options.button_size && parseFloat(options.button_size)
          ? parseFloat(options.button_size)
          : 1;
      options.separator = options.separator ? options.separator : ",";

      for (var data in options) {
        if (options.hasOwnProperty(data) && options[data]) {
          p += p
            ? "&" + data + "=" + encodeURIComponent(options[data])
            : data + "=" + encodeURIComponent(options[data]);
        } else {
          options[data] = "";
        }
      }

      if (
        !options.kinopoisk &&
        !options.title &&
        !options.imdb &&
        !options.tmdb
      ) {
        return false;
      }

      if (options.tv) {
        document.addEventListener("keydown", yo_ahoy_key);
      }

      if (options.resize) {
        window.addEventListener("orientationchange", yo_resize, false);
        window.addEventListener("resize", yo_resize, false);
      }

      var flixs_loading = document.querySelector("#flixs-loading");
      if (flixs_loading) {
        flixs_loading.parentNode.removeChild(flixs_loading);
      }
      var flixs_buttons = document.querySelector("#flixs-buttons");
      if (flixs_buttons) {
        flixs_buttons.parentNode.removeChild(flixs_buttons);
      }
      var flixs_iframe = document.querySelector("#flixs-iframe");
      if (flixs_iframe) {
        flixs_iframe.parentNode.removeChild(flixs_iframe);
        // Add Backg Image


      }
      var data_ahoy = document.querySelectorAll("[data-ahoy]");
      for (var da in data_ahoy) {
        if (data_ahoy.hasOwnProperty(da) && data_ahoy[da]) {
          var flixs_da = document.querySelector(
            "#" + data_ahoy[da].getAttribute("data-ahoy")
          );
          if (flixs_da) {
            flixs_da.removeAttribute("style");
          }
        }
      }

      var head = document.head || document.getElementsByTagName("head")[0];
      var css =
        "#flixs-loading{z-index:9999;position:absolute;left:0;top:0;width:100%;height:100%;background:#" +
        bg +
        " url(" +
        options_loading +
        ") 50% 50% no-repeat}#flixs-buttons{display:none;position:absolute;z-index:9999;right:0;top:50px;text-align:left}#flixs-buttons:hover{right:0!important}#flixs-buttons div{font-family:Verdana,sans-serif;font-weight:normal;text-shadow:none;line-height:normal;font-size:" +
        12 * options.button_size +
        "px;color:#fff;background:#" +
        bg +
        ";border-radius:5px 0 0 5px;padding:5px;margin:5px 0 5px 5px;opacity:.7;}#flixs-buttons div:hover,#flixs-buttons div.flixs-active{color:#fff;background:#" +
        bg +
        ";cursor:pointer;opacity:1}";
      s = document.createElement("style");
      s.type = "text/css";
      if (s.styleSheet) {
        s.styleSheet.cssText = css;
      } else {
        s.appendChild(document.createTextNode(css));
      }
      head.appendChild(s);

      l = document.createElement("div");
      l.setAttribute("id", "flixs-loading");
      flixs.innerHTML = "";
      flixs.appendChild(l);

      i = document.createElement("iframe");
      i.setAttribute("id", "flixs-iframe");
      i.setAttribute("frameborder", "0");
      i.setAttribute("allowfullscreen", "allowfullscreen");
      flixs.appendChild(i);

      if (parseInt(flixs.offsetWidth)) {
        w = parseInt(flixs.offsetWidth);
      } else if (flixs.parentNode && parseInt(flixs.parentNode.offsetWidth)) {
        w = parseInt(flixs.parentNode.offsetWidth);
      } else {
        w = 610;
      }

      if (
        flixs.parentNode &&
        flixs.parentNode.tagName &&
        flixs.parentNode.tagName.toLowerCase() === "body"
      ) {
        h = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
      } else if (
        parseInt(flixs.offsetHeight) &&
        parseInt(flixs.offsetHeight) < 370
      ) {
        if (
          flixs.parentNode &&
          parseInt(flixs.parentNode.offsetHeight) &&
          parseInt(flixs.parentNode.offsetHeight) >= 370
        ) {
          h = parseInt(flixs.parentNode.offsetHeight);
        } else {
          h = 370;
        }
      } else if (
        parseInt(flixs.offsetHeight) &&
        w / 3 < parseInt(flixs.offsetHeight)
      ) {
        h = parseInt(flixs.offsetHeight);
      } else if (
        flixs.parentNode &&
        parseInt(flixs.parentNode.offsetHeight) &&
        w / 3 < parseInt(flixs.parentNode.offsetHeight)
      ) {
        h = parseInt(flixs.parentNode.offsetHeight);
      } else {
        h = w / 2;
      }

      var style =
        "width:" +
        w +
        "px;height:" +
        h +
        "px;border:0;margin:0;padding:0;overflow:hidden;position:relative";
      i.setAttribute("style", style);
      i.setAttribute("width", w);
      i.setAttribute("height", h);
      flixs.setAttribute("style", style);

      yo_get(options_url, p, function (players) {
        var first = true;
        var buttons = document.createElement("div");
        buttons.setAttribute("id", "flixs-buttons");
        var keys = options.player.split(options.separator);
        if (/\/\/|%2F%2F/i.test(options.player)) {
          var p = [];
          for (var k = 0; k < keys.length; k++) {
            var re = keys[k].match(/^(.*?)(http.*|\/\/.*)$/i);
            if (!re || !re[1] || !re[1].trim()) continue;
            p.push(re[1].trim());
          }
          if (p.length) {
            keys = p;
          } else {
            var yo_res = Object.keys(players);
            var yo_new = [];
            for (var ps = 0; ps < keys.length; ps++) {
              for (var pp = 0; pp < yo_res.length; pp++) {
                if (
                  keys[ps].toLowerCase().indexOf(yo_res[pp].toLowerCase()) + 1
                ) {
                  yo_new.push(yo_res[pp]);
                }
              }
            }
            keys = yo_new;
          }
        }
        var j = 0;
        for (var i = 0, len = keys.length; i < len; i++) {
          var key = keys[i].toLowerCase().trim();
          if (
            players.hasOwnProperty(key) &&
            players[key] &&
            players[key].iframe
          ) {
            players[key].quality = players[key].quality
              ? players[key].quality.replace(/"/g, "'")
              : "";
            players[key].translate = players[key].translate
              ? players[key].translate.replace(/"/g, "'")
              : "";
            var option = document.createElement("div");
            option.setAttribute(
              "onclick",
              'yo_player("' +
                encodeURIComponent(players[key].iframe) +
                '", "' +
                players[key].quality +
                '", "' +
                players[key].translate +
                '", this, "' +
                options.button_size +
                '")'
            );
            option.dataset.event = "" + (j + 1);
            option.dataset.page =
              Math.ceil((j + 1) / options.button_limit) + "";
            option.dataset.iframe = players[key].iframe;
            option.dataset.quality = players[key].quality;
            option.dataset.translate = players[key].translate;
            if (btns.hasOwnProperty(key) && btns[key]) {
              var q = players[key].quality
                ? players[key].quality.toUpperCase().search(/TS|TC|SCR|CAM/gi) +
                  1
                  ? "ЭКРАН"
                  : players[key].quality.toUpperCase().search(/720P/gi) + 1
                  ? "720P"
                  : players[key].quality.toUpperCase().search(/1080P/gi) + 1
                  ? "1080P"
                  : players[key].quality
                      .toUpperCase()
                      .replace(/\s?ХОРОШЕЕ\s?|\s?СРЕДНЕЕ\s?|\s?ПЛОХОЕ\s?/gi, "")
                : "";
              var t = players[key].translate
                ? /ДУБЛ/i.test(players[key].translate)
                  ? "ДУБЛЯЖ"
                  : /ПРОФ/i.test(players[key].translate)
                  ? "ПРОФ."
                  : /ЛЮБИТ/i.test(players[key].translate)
                  ? "ЛЮБИТ."
                  : /АВТОР/i.test(players[key].translate)
                  ? "АВТОР."
                  : /МНОГОГОЛ/i.test(players[key].translate)
                  ? "МНОГОГОЛ."
                  : /ОДНОГОЛ/i.test(players[key].translate)
                  ? "ОДНОГОЛ."
                  : /ДВУХГОЛ/i.test(players[key].translate)
                  ? "ДВУХГОЛ."
                  : /ОРИГИНАЛ/i.test(players[key].translate)
                  ? "ОРИГИНАЛ"
                  : /(ENG|ORIG|СУБТ)/i.test(players[key].translate)
                  ? options.language && /en/i.test(options.language)
                    ? "ENGLISH"
                    : "СУБТИТИРЫ"
                  : players[key].translate.toUpperCase()
                : "";
              j++;
              btns[key] = btns[key]
                .replace("{N}", j)
                .replace("{Q}", q)
                .replace("{T}", t)
                .replace(/\s+/g, " ")
                .replace(/(^\s*)|(\s*)$/g, "");
              btns[key] = btns[key] ? btns[key] : key.toUpperCase();
              option.innerText = j + "► " + btns[key];
            } else if (key === "trailer") {
              j++;
              option.innerText = j + "► " + language.trailer.toUpperCase();
            } else if (key === "torrent") {
              j++;
              option.innerText = j + "► " + language.torrent.toUpperCase();
            } else {
              j++;
              option.innerText = j + "► " + key.toUpperCase();
            }
            if (first) {
              yo_player(
                players[key].iframe,
                players[key].quality,
                players[key].translate,
                option,
                buttons,
                options.button_size
              );
              first = false;
            }
            buttons.appendChild(option);
            if (j && !(j % options.button_limit) && keys[i + 1]) {
              var next = document.createElement("div");
              next.setAttribute(
                "onclick",
                "yo_page(" +
                  Math.ceil((j + 1) / options.button_limit) +
                  ', "' +
                  options.button_size +
                  '");' +
                  'yo_player("' +
                  encodeURIComponent(
                    players[keys[i + 1].toLowerCase().trim()].iframe
                  ) +
                  '", "' +
                  players[keys[i + 1].toLowerCase().trim()].quality +
                  '", "' +
                  players[keys[i + 1].toLowerCase().trim()].translate +
                  '", document.querySelector(\'[data-event="' +
                  (j + 1) +
                  '"]\'), "' +
                  options.button_size +
                  '")'
              );
              next.dataset.event = "next";
              next.dataset.page = Math.ceil(j / options.button_limit) + "";
              next.innerText = "-► " + language.next;
              buttons.appendChild(next);

              var prev = document.createElement("div");
              prev.setAttribute(
                "onclick",
                "yo_page(" +
                  Math.ceil(j / options.button_limit) +
                  ', "' +
                  options.button_size +
                  '");' +
                  'yo_player("' +
                  encodeURIComponent(
                    players[keys[i - 1].toLowerCase().trim()].iframe
                  ) +
                  '", "' +
                  players[keys[i - 1].toLowerCase().trim()].quality +
                  '", "' +
                  players[keys[i - 1].toLowerCase().trim()].translate +
                  '", document.querySelector(\'[data-event="' +
                  j +
                  '"]\'), "' +
                  options.button_size +
                  '")'
              );
              prev.dataset.event = "prev";
              prev.dataset.page =
                Math.ceil((j + 1) / options.button_limit) + "";
              prev.innerText = "◄- " + language.prev;
              buttons.appendChild(prev);
            }
          }
        }
        if (j < 1) {
          var flixsLoading = document.querySelector("#flixs-loading");
          flixsLoading.style.display = "none";
        } else if (j > 1) {
          flixs.appendChild(buttons);
          if (keys.length > options.button_limit) {
            yo_page(1, options.button_size);
          }
        }
      });
    }

    function yo_player(iframe, quality, translate, element, buttons, size) {
      window.parent.postMessage(
        { quality: quality, translate: translate },
        "*"
      );
      var flixsLoading = document.querySelector("#flixs-loading");
      flixsLoading.style.display = "block";
      setTimeout(function () {
        flixsLoading.style.display = "none";
      }, 2000);
      var flixsIframe = document.querySelector("#flixs-iframe");
      flixsIframe.style.display = "block";
      if (iframe.indexOf("4h0y") + 1) {
        yo_get(decodeURIComponent(iframe), "", function (json, html) {
          flixsIframe.setAttribute(
            "src",
            "data:text/html;charset=utf-8," + encodeURIComponent(html)
          );
        });
      } else {
        flixsIframe.setAttribute("src", decodeURIComponent(iframe));
      }
      
      flixsIframe.src += `?&poster=${
              image !== undefined
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.file_path}`
                : imageBack !== undefined
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${imageBack}`
                : `https://www.universalpictures.com/assets/img/universal-share.jpg`
            }`
      console.log();
      flixsIframe.setAttribute("class", "");
      if (typeof element.setAttribute === "function") {
        var flixsActive = document.querySelectorAll(".flixs-active");
        if (flixsActive) {
          for (var i = 0; i < flixsActive.length; i++) {
            flixsActive[i].setAttribute("class", "");
          }
        }
        element.setAttribute("class", "flixs-active");
      }
      var flixsButtons = buttons
        ? buttons
        : document.querySelector("#flixs-buttons");
      size = size ? parseFloat(size) : 1;
      if (flixsButtons) {
        flixsButtons.style = flixsButtons.style ? flixsButtons.style : {};
        if (flixsButtons.style && typeof flixsButtons.style === "object") {
          flixsButtons.style.right = "0";
        } else {
          flixsButtons.style = { right: "0" };
        }
        setTimeout(function () {
          var btn = setInterval(function () {
            if (
              parseInt(
                (flixsButtons.style && flixsButtons.style.right) || "0"
              ) >
              -parseInt(flixsButtons.offsetWidth) + 30 * size
            ) {
              flixsButtons.style.right =
                parseInt(flixsButtons.style.right) - 1 + "px";
            } else {
              clearInterval(btn);
            }
          }, 5);
        }, 5000);
      }
    }

    function yo_page(page, size) {
      var flixsPages = document.querySelectorAll("div[data-page]");
      if (flixsPages) {
        for (var i = 0; i < flixsPages.length; i++) {
          flixsPages[i].style.display = "none";
        }
      }
      var flixsPage = document.querySelectorAll(
        'div[data-page="' + page + '"]'
      );
      if (flixsPage) {
        for (var j = 0; j < flixsPage.length; j++) {
          flixsPage[j].style.display = "block";
        }
      }
      var flixsButtons = document.querySelector("#flixs-buttons");
      size = size ? parseFloat(size) : 1;
      if (flixsButtons) {
        flixsButtons.style.right = "0";
        setTimeout(function () {
          var btn = setInterval(function () {
            if (
              parseInt(
                (flixsButtons.style && flixsButtons.style.right) || "0"
              ) >
              -parseInt(flixsButtons.offsetWidth) + 30 * size
            ) {
              flixsButtons.style.right =
                parseInt(flixsButtons.style.right) - 1 + "px";
            } else {
              clearInterval(btn);
            }
          }, 5);
        }, 5000);
      }
    }

    function yo_get(url, body, callback) {
      var YoXmlHttp = new XMLHttpRequest();
      YoXmlHttp.onreadystatechange = function () {
        if (YoXmlHttp.readyState === 4) {
          if (YoXmlHttp.status === 200) {
            callback(yo_json(YoXmlHttp.responseText), YoXmlHttp.responseText);
          } else {
            callback({}, "");
          }
        }
      };
      YoXmlHttp.open("POST", url, true);
      YoXmlHttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      YoXmlHttp.send(body);
    }

    function yo_json(jsonString) {
      try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
          console.log(o, "aa");
          
          return o;
        }
      } catch (e) {}
      return {};
    }

    function yo_fullscreen() {
      var isInFullScreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      var iframe = document.querySelector("#flixs-iframe");
      if (!isInFullScreen) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
          iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullScreen) {
          iframe.webkitRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
          iframe.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }

    function yo_resize() {
      var yi = document.querySelector("#flixs-iframe");
      if (
        !yi ||
        !yi.parentNode ||
        !yi.parentNode.parentNode ||
        !yi.parentNode.parentNode.offsetWidth
      )
        return;
      var w = parseInt(yi.parentNode.parentNode.offsetWidth);
      yi.style.width = w + "px";
      yi.setAttribute("width", w.toString());
      yi.parentNode.style.width = w + "px";
    }
   
  const img = image;
      var a = document.querySelectorAll("[data-ahoy]");
      if (a && a.length) {
        for (var i in a) {
          if (a.hasOwnProperty(i) && a[i]) {
            a[i].addEventListener("click", function () {
             return yot(this);
            });
          }
        }
      } else {
        return yot();
      }
    
};
export default Film;
