videojs.registerPlugin('share', function (config) {

    config = {
        title: config.title || 'Поделиться',
        code: config.code || '<iframe class="iz-player" src="' + window.location + '#inside" width="560" height="315" frameborder="0" allowfullscreen></iframe>',
        url: config.url || window.location,
        icon: {
            title: config.icon.title || 'Ты должен это увидеть',
            vk: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAASlQTFRFRGeNRWiNRWiOR2mPSGqPSGuQS2yRS22RTW6STm+TT3CUUHGUUHGVUXKVUnKVU3OWVXWXVnWYVnaYWHeZW3qbXnydX32eYn+fZ4SiaoakbIelbIimbYimbommb4qncIuocYypc42qd5GsepOue5SvfJWvfpawgpqzhZu0hZy1hp21h562iZ+3iqC3jaK5j6S7kqe9lKi+lam+lam/l6rAmKzAnrDEprbIqbnLrLzMrr3Osb/PtMLRucbUvMjWvcnXw87axM/bxdDcyNLdydPezdbhztfh0Nni0trj0tvk1Nzl1t7m197m19/n2+Lp3ePq4uft4uju5Onu6Ozx6O3x7fD07vH18PP28fT38vT38/X38/X49ff59vj6+vv8/P39/f3+/v7/////T9XPuQAAAOZJREFUGBntwYVCwgAABNADA2e3ooLMLsTEFhsDlDkszN3/f4S7DXTAL/AeGir6EpPxiQ4A0Wvbtq3DMFxdCdM04xHIAV0fQ8DYI2UZQGuRsgeZo1wAiFLWAWzTMwsJFSjTQA8lBbS9UPLwJSmFJhiUJJCmfMfgC91RNhGhLKH/nZJGxegPXaXuEcpa8y0lG8affcrNCSV3RnkdwD/jiXU2ELTIOjuocsVaTgpBw2+s5awiaPyTZc/zeXqcGQTFivQdw8jRUxpEUPvRF2UL6HygZxfVjJXMefa0F0DLwqVlWfdTaCj7BZ5waWAb+1niAAAAAElFTkSuQmCC',
                url: 'https://vk.com/share.php?url='
            },
            ok: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsRAAALEQF/ZF+RAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjEzNANbegAAArpJREFUSEu10ttP02AYBvD3v1gPQ0lkmOilemNiIlx6adQLrxAFObMxDuHgAgRjQE1EY2KUG6+IiNHgAQxKUAiKJAZMkKMYDacdYYVubb9+re1KpOu6jpt++V2sz56+b9cMJJ/DVoBvOGxl/wKxxWErQM0OWwFqctgKhEbiIFDnCXGoA8++wzOvxBc1QluuoZAO8I1ERqi3ROZZWXekyF+hO89QMwVcA2FNeHhOFpE6NR7F8x/xrwlZ5NUdW6tc61FDORXE6wlreGFEHbe9zt06qSYNJP/kkozUHehtu75pCmJ1hIV4U7aMOGWW8KZ9P68nxdn3SogXP+2HaQBbS1iIteRoL4Tv8+hzNPVMXbDyVR+aAtZLWCLx5oIyS1waY2tpLYz5jkuMX/1ZYz26pjnYrSGtcX21yix1x/wo97SI63Vj/5J6jfhY11lDORXseMgMvE40/TqxQnckzL30GZtmgHGTGdRkMR463t+MN5UHl2Qsiivf2EeX1a+8h5KaZiBaTablyRIXx2VR4IYfME3H1MR7WAmj1dTOzTPox5CyjBu8k3RLCtiuItOqc0lxZu+VcLvCzKAyjhu+j5a/KKO1HM2NGu9KBlsVpIWd7vPin2nljWvjko4oCDNDUd8pwy0GECmnMqjMYu5d4Cf7MRPYm+xfiY883u7IMzbNQLiMOoiIJ0f4OaqOl6TYQGe43GkopAOhUiqjsNslzH1OPH3iSJgd6AqVOQ01UxAsoayF3LnC/Lg2Gf3+jpmg+imxI1jqNJRTQeA6ZSFYni0sTyWGy8LSZLDKFWnLx9G9HbsDtw39VOAvpiyEmk9r/0hleqDiiBaGlR1MSAnR+sL/ZjqwWURZKaaZ5+3shx5/pUufh1rzYxN9kbsX9aEp2LhG2Qo2rtK2gvVC2lawVkjbCtau0LaC1QLaRgX0P7AZlEoNGSzLAAAAAElFTkSuQmCC',
                url: 'https://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl='
            },
            fb: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAPgAAAD4Ac/B5mUAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAABD0lEQVRIS2OwCp1PUzRqAUFEqQW2EQtiitcnV26GIzQF5FsQXbTh3JVnv379+Y8Efv76jaaMTAuqe/ehGQ0B1LEgMHPVl6+/oEaiAupYsHbndah5GIA6Fty4+wZqHhi8fvt1+tIz5Z17gKikYzeaYnIs+P4DJXyqevejKUBG5FgADAeo2WDgm7oCTQEyooIF3inL0RQgo8FhgXPskq5ZR+Hoz5+/ULPBYOqSU3CphkkH0fQSZQEw4UMNIwSu3n6NppfKFuw5ehdNL5UtWLj2AppeKlvQMf0oml6iLPBIXLZl/y04+vv3H9Q8MAAGC1wqrngDml6iLEBDQzAfoKFRCwiiUQsIolELCCISLAidDwBMKRwCdUtYAQAAAABJRU5ErkJggg==',
                url: 'https://www.facebook.com/sharer/sharer.php?u='
            },
            twitter: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPNQTFRFUKvxUavxUazxUqzxU6zxVq7xWK/yWa/yWrDyXLHyXrLyZrbzZ7bzaLfzabfza7jzbLnzbrnzcLr0cbv0crv0dr30d770eL70er/0e7/0f8L1gcP1hsX1iMb1isf2jMj2jsn2kcr2lMz2lcz3mc73nND3n9H3otL4o9P4pdT4ptT4p9X4qdb4qtb4r9j5r9n5str5tdv5uN35ud35ut76vN/6wuL6yOX7y+b7zef7z+j70On70un71Or81Ov82e382+783O783u/84fH95vP96vX96/X97vf+8Pj+8fj+9vv+9/v++fz//f7//v7//v//////30cB7QAAAMdJREFUGBndwYlaAVEABtDfxJDKGlqHZC9L21RaxhbJ9r//0+DLHffe8QTOwd4KnoagMQNwnXzOuXBiOK8bcOWdMDYiE65NB7zA1hsHEfz75kb7OQWXTY5v/Fg5pDDPYavMlZ+CCZxRuIMk0OfarP/SpGBBcp2dUpeB5IkL6o4gydFjCEWbugcogpUxVRkoDLtLxTs0VSpmSWgOWpQV4RUt/VF4xA4Jh0LdB9XxlVXpUBhZ8Lj8oPBbM7FL/Lbx2vuy79MG9tESkyBT9XTYC5sAAAAASUVORK5CYII=',
                url: 'https://twitter.com/intent/tweet?url='
            },
            google: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAPgAAAD4Ac/B5mUAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAACA0lEQVRIS+2U/yskcRjH799ybYjQYX3PESfxg18Iv0iEklx3V/fT+YGUrjtSEpEQoUhRvkQUMrN7lz3ssrt21uzs7sx685nG7HM7O5SrU/v0+mE+7+f5PO+ZZz4zb05zkv4pCQNTEgam/AcGXFEqV5hCxKdjaGCvKbqZmwzwpxFZBpKdw5L/YCVlpsQ2cPZ9lsXbyF8hCz5Hdwspjk8MA2ffF7VfJKIEg4GjA6BIASzxHHz5O1IfH2pgry1RRD/rfrM4y5WkM91WluUZH7FVZGuVGvz7TP/e1vWPAaIzqIF3fop1960tkZQRcL2/m5UFojOoQYA7YQa2qjxVtFquhgcJf3pakfpVV3bW0XT+qRP14v42rgFXEHXkog3yk5VQCNVhl1MvPjhGhbC5jpRnYlRd68JeXfi4lxpYLbIkoSjsdT+KxgZnbQ2uoW/u0SEoEn+Ma6C9NgYdkXh8yFrg8VUx9+3Fxw6Gb3meZb0z49qW570D7/QYa4GZorU+hYMU9rhZFrPWdL4iOyz4cDo0RQ81wO1gPqyLuL/7u74SNlxxGr6v251Npt8PMM9CNhpBDcB5bxtrxAKfhRIKqguELDvaG8mWOMQwAI6u5qDrUu2oC9kvXHztIcXxiW0A+NIM1/d+YWM1dOXETMSDneuxn8/9TwBDg5ciYWBKwsCU126Qk3QHOF9HfqAmnhIAAAAASUVORK5CYII=',
                url: 'https://plus.google.com/share?url='
            },
            mail: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsRAAALEQF/ZF+RAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjEzNANbegAAAlRJREFUSEu10s9r02AYwPEnCSKCl9H+AYoVJuJhsoPoRfQwwbOK7ODFi3gRxbt48uLVkzCrzk03t/Xn2s7qitLhREZhDGfn7Fi3zrZJ2+RtkiZ535j4tjCSTXZ5Hz6HNG2+T3lbsDNsAcmwBTjNFlhptsBMsQXGLFvQSXJMgZ7kmAI1zjEF7RjHFKAot7f4YTU3cEDOh72P94Ac4fyUZB/6eLrz45FNLNsm/0PMTvEJ+hBS4kc8EQpaM5yfMhci2jbKndMKd52Evd8QU1t+gObPYrUkJwOeCAWNac5PzoSc705MBeWH0OJ1Yqnd4q4hltb+fkv5cokYDRsbzUTAE6FAmuL8mml3gVvBGlq8KX++TIwW7dIhZkvJX0Vfr9lYc19joxEPeCIU1N/zfo1Ud4E7xGwX7jWzg1j/Q29gvdb8dB4t3XG69I5zIcWCnggFtUneT9q9wCZ6KVyP9EnpfkspWui3lDlTjwb0jdHu+85gox4NeiIUVCd4P3G2t4BYaOWxmDplySva+vN64lg9eUJde2a2lsVUf3v1qXOIdEEtEvREKNh5x/vVkv9+ZEttfbstZi9gvepWbFvfiuibE/Qaq2VxblAuPHQPChvVmaAnQkHlLe9XTZx0omLuSiN/g5iIFv2DO5I4P9RYGCZGc2c66IlQsDXO+1WmAtXUQGvpvvNfdM9qf8SQpYXhWvbi9uRRT4SC8hi/t/FDlVjoQKLHy2OC9/Ee2HzDMwUbowJTUHotMAXrrwSm4NdLgSlYCwtMQTEsMAU/XwhMweqIwBTjBSPCX7IYHwaSRnkIAAAAAElFTkSuQmCC',
                url: 'mailto:?subject=' + config.icon.title  + '&body='
            }
        }
    };
    var player = this;
    var container;

    /**
     * Создание dom-элементов
     */
    function constructSharePage () {

        config.target = config.target || 'self';

        var fragment  = document.createDocumentFragment();

        container = document.createElement('aside');
        container.id  = 'vjs-share';
        container.className = 'vjs-share';

        /**
         * Кнопка закрыть
         * @type {Element}
         */
        var close       = document.createElement('span');
        close.className = 'vjs-share-close vjs-icon-cancel';
        close.id        = 'vjs-share-close-button';
        container.appendChild(close);

        /**
         * Заголовок
         * @type {Element}
         */
        var title    = document.createElement('h5');
        title.innerHTML = config.title;
        title.className = 'vjs-share-title';
        container.appendChild(title);

        /**
         * Иконки соц. сетей
         * @type {Element}
         */
        var iconList    = document.createElement('div');
        iconList.className = 'vjs-share-icon-list';
        container.appendChild(iconList);

        var icon = {};
        if (config.icon.vk) {
            icon.vk    = document.createElement('a');
            icon.vk.className = 'vjs-share-icon-vk';
            icon.vk.setAttribute('style', 'background-image: url(' + config.icon.vk.image + ');');
            icon.vk.href = config.icon.vk.url + config.url;
            icon.vk.setAttribute('target', '_blank');
            iconList.appendChild(icon.vk);
        }

        if (config.icon.ok) {
            icon.ok    = document.createElement('a');
            icon.ok.className = 'vjs-share-icon-ok';
            icon.ok.setAttribute('style', 'background-image: url(' + config.icon.ok.image + ');');
            icon.ok.href = config.icon.ok.url + config.url;
            icon.ok.setAttribute('target', '_blank');
            iconList.appendChild(icon.ok);
        }

        if (config.icon.fb) {
            icon.fb    = document.createElement('a');
            icon.fb.className = 'vjs-share-icon-fb';
            icon.fb.setAttribute('style', 'background-image: url(' + config.icon.fb.image + ');');
            icon.fb.href = config.icon.fb.url + config.url;
            icon.fb.setAttribute('target', '_blank');
            iconList.appendChild(icon.fb);
        }

        if (config.icon.twitter) {
            icon.twitter    = document.createElement('a');
            icon.twitter.className = 'vjs-share-icon-twitter';
            icon.twitter.setAttribute('style', 'background-image: url(' + config.icon.twitter.image + ');');
            icon.twitter.href = config.icon.twitter.url + config.url;
            icon.twitter.setAttribute('target', '_blank');
            iconList.appendChild(icon.twitter);
        }

        if (config.icon.google) {
            icon.google    = document.createElement('a');
            icon.google.className = 'vjs-share-icon-google';
            icon.google.setAttribute('style', 'background-image: url(' + config.icon.google.image + ');');
            icon.google.href = config.icon.google.url + config.url;
            icon.google.setAttribute('target', '_blank');
            iconList.appendChild(icon.google);
        }

        if (config.icon.mail) {
            icon.mail    = document.createElement('a');
            icon.mail.className = 'vjs-share-icon-mail';
            icon.mail.setAttribute('style', 'background-image: url(' + config.icon.mail.image + ');');
            icon.mail.href = config.icon.mail.url + config.url;
            icon.mail.setAttribute('target', '_blank');
            iconList.appendChild(icon.mail);
        }

        /**
         * Форма iframe
         * @type {Element}
         */
        var code = document.createElement('div');
        code.className = 'vjs-share-code';
        container.appendChild(code);

        var codeTitle = document.createElement('div');
        codeTitle.className = 'vjs-share-code-tile';
        codeTitle.innerText = 'Код для вставки плеера на свой сайт:';
        code.appendChild(codeTitle);

        var codeTextarea = document.createElement('textarea');
        codeTextarea.className = 'vjs-share-code-textarea';
        codeTextarea.innerText = config.code;
        codeTextarea.addEventListener('click', function () {this.select();}, false);
        code.appendChild(codeTextarea);


        //var checked = config.code.indexOf('autoplay') != -1 ? 'checked' : '';
        var checked = '';
        var autoplay = document.createElement('div');
        autoplay.className = 'vjs-share-code-autoplay';
        autoplay.innerHTML = ' <label for="autoplay"><input type="checkbox" ' + checked + ' id="autoplay">Автозапуск</label>';
        autoplay.addEventListener('click', function () {

            var match = config.code.match(/src="(.*?)"/i);
            var hashArray = relatedHash(match[1]);
            if(document.getElementById('autoplay').checked) {
                if (!hashArray['autoplay']) {
                    hashArray['autoplay'] = null;
                }
            } else {
                delete hashArray['autoplay'];
            }

            var keyList = Object.keys(hashArray);
            var hash = '';
            var i = 0;
            while (true) {
                if (!keyList[i]) {
                    break;
                }
                if (i == 0) {
                    hash = '#' + hash + keyList[i];
                    if (hashArray[keyList[i]] != null) {
                        hash = hash + '=' + hashArray[keyList[i]];
                    }
                } else {
                    hash = hash + '&' + keyList[i];
                    if (hashArray[keyList[i]] != null) {
                        hash = hash + '=' + hashArray[keyList[i]];
                    }
                }
                i++;
            }

            var match = config.code.match(/src="(.*?)(#.*?)?"/i);

            if (match[2]) {
                codeTextarea.innerText = config.code.replace('src="' + match[1] + match[2], 'src="' + match[1] + hash);
            } else {
                codeTextarea.innerText = config.code.replace('src="' + match[1], 'src="' + match[1] + hash);
            }

        }, false);
        code.appendChild(autoplay);

        var codeDescrition = document.createElement('div');
        codeDescrition.className = 'vjs-share-code-description';
        codeDescrition.innerText = 'Нажмите CTRL+C чтобы скопировать выделенный код';
        code.appendChild(codeDescrition);

        fragment.appendChild(container);
        player.el().appendChild(fragment);

        close.addEventListener('click', function () {
            container.classList.remove('vjs-share-active');
            if (player.el().firstChild.paused) {
                player.play();
            }
        });

        /**
         * Возвращает ключи хеша
         * @param url
         * @returns {Array}
         */
        function relatedHash (url) {

            var regex = '[#&]([^&#=]+)[=]?([^&#=]+)?';
            var globalRegex = new RegExp(regex, 'gi'),
                nonGlobalRegex = new RegExp(regex),
                nonGlobalMatch,
                globalMatch = url.match(globalRegex),
                matchArray,
                i;

            matchArray = [];

            if (globalMatch) {
                for (i = 0; i < globalMatch.length; i += 1) {
                    nonGlobalMatch = globalMatch[i].match(nonGlobalRegex);
                    matchArray[nonGlobalMatch[1]] = nonGlobalMatch[2] || null;
                }
            }

            return matchArray;

        }

    }

    /**
     * Добавление кнопки
     */
    player.ready(function () {

        var shareButton = document.createElement('span');
        shareButton.id = 'vjs-share-open-button';
        shareButton.className = 'vjs-share-open vjs-icon-share';
        player.el().appendChild(shareButton);

        var shareButtonInfo = document.createElement('span');
        shareButtonInfo.id = 'vjs-share-open-button-info';
        shareButtonInfo.innerText = config.title;
        player.el().appendChild(shareButtonInfo);

        constructSharePage();
        shareButton.addEventListener('click', function () {
            player.pause();
            container.classList.add('vjs-share-active');
        });

    });

});