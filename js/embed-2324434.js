(function (opinionStage) {
    if(!opinionStage.legacy) {
        opinionStage.legacy = {};
        
        opinionStage.legacy.state = {};
        opinionStage.legacy.functions = {};
        opinionStage.legacy.hooks = {};
        opinionStage.legacy.polls = []; // Polls ids
        opinionStage.legacy.sets = []; // Set ids
        opinionStage.legacy.widgets = []; // Widgets urls
        opinionStage.legacy.polls_locations = {};
        opinionStage.legacy.sets_locations = {};
        opinionStage.legacy.widgets_locations = {};
        opinionStage.legacy.state.initialized = false;
        opinionStage.legacy.state.ready = false;
        opinionStage.legacy.protocol = document.location.protocol == "https:" ? "https:" : "http:";
        // JSON RegExp
        opinionStage.legacy.rvalidchars = /^[\],:{}\s]*$/;
        opinionStage.legacy.rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        opinionStage.legacy.rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        opinionStage.legacy.rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;

        opinionStage.legacy.functions.include = Array.prototype.indexOf ?
                function(arr, obj) { return arr.indexOf(obj) !== -1 && typeof arr.indexOf(obj) !== "undefined"; } :
                function(arr, obj) {
                    for(var i = -1, j = arr.length; ++i < j;)
                        if(arr[i] === obj) return true;
                    return false;
                };

        opinionStage.legacy.trim = function (text) {
            if (text.trim) {
                return text == null ? "" : text.trim();
            }
            return text == null ? "" : text.toString().replace(/^\s+/,'').replace(/\s+$/,'');
        };
        // Code taken from jquery
        opinionStage.legacy.parseJson = function(data) {
            try {
                if (typeof data !== "string" || !data) {
                    return null;
                }
                data = opinionStage.legacy.trim(data);
                if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data);
                }
                if (opinionStage.legacy.rvalidchars.test(data.replace(opinionStage.legacy.rvalidescape, "@")
                        .replace(opinionStage.legacy.rvalidtokens, "]")
                        .replace(opinionStage.legacy.rvalidbraces, ""))) {
                    return ( new Function( "return " + data ) )();
                }
                return "";
            } catch(e) {
                return "";
            }
        };
        opinionStage.legacy.addHook = function(side_id, code) {
            opinionStage.legacy.hooks[side_id] = new Function(code);
        };
        opinionStage.legacy.addNativeListener = function(event, callback) {
            return window.addEventListener ? window.addEventListener(event, callback, false) : window.attachEvent("on" + event, callback);
        };
        opinionStage.legacy.handleMessage = function(evt) {
            // Verify the message came from 'opinionstage'
            if (evt.origin.indexOf("opinionstage.com") != -1) {
                var msg = opinionStage.legacy.parseJson(evt.data);
                if (msg == null) {
                    return;
                }
                if ((msg.type == "heightChanged") && msg.data) {
                    if(msg.data.widget_page_id) {
                        opinionStage.legacy.setFrameHeight(opinionStage.legacy.widgets_locations[msg.data.src_id], msg.data.height);
                    }
                    else {
                        opinionStage.legacy.setFrameHeight(opinionStage.legacy.polls_locations[msg.data.src_id], msg.data.height);
                    }
                } else if ((msg.type == "pollSetHeightChanged") && msg.data) {
                    opinionStage.legacy.setFrameHeight(opinionStage.legacy.sets_locations[msg.data.src_id], msg.data.height);
                } else if ((msg.type == "redirect") && msg.data) {
                    opinionStage.legacy.redirect(msg.data.url);
                } else if ((msg.type == "pollVote") && msg.data) {
                    if (opinionStage.legacy.hooks[msg.data.sides[0]] != null) {
                        opinionStage.legacy.hooks[msg.data.sides[0]]();
                    }
                }
            }
        };
        opinionStage.legacy.redirect = function(url) {
            window.location.href = url;
        };
        opinionStage.legacy.addPollLocation = function(poll_id, div_id) {
            opinionStage.legacy.polls_locations[poll_id] = div_id;
        };
        opinionStage.legacy.insertLoader = function(div_id) {
            var container_div = document.getElementById(div_id);
            var existing_loader = opinionStage.legacy.getElementsByClassName(container_div, "os-loader")[0];
            if (existing_loader != null) {
                return; // Not adding a second loader
            }
            var loader = document.createElement('div');
            loader.className = "os-loader";
            loader.setAttribute('style','background: url(https://d15r06k2ko210l.cloudfront.net/assets/ajax-loader-107b480a27602c4d837308f058a18df5.gif) no-repeat;height: 32px; width: 32px; display: block; margin: 0 auto !important');
            container_div.insertBefore(loader, container_div.firstChild);
        };
        opinionStage.legacy.addPollSetLocation = function(set_id, div_id) {
            opinionStage.legacy.sets_locations[set_id] = div_id;
        };
        opinionStage.legacy.addWidgetLocation = function(widget_id, div_id) {
            opinionStage.legacy.widgets_locations[widget_id] = div_id;
        };
        opinionStage.legacy.setFrameHeight = function(frame_container_id, height) {
            var frame_div = document.getElementById(frame_container_id);
            if (frame_div != null) {
                var frame = frame_div.getElementsByTagName("IFRAME")[0];
                var current_style = frame.style.cssText;
                if (current_style.indexOf('height') == -1) {
                    opinionStage.legacy.hideLoader(frame_container_id);
                }
                frame.style.cssText = "height: " + height + "px !important";
            }
        };
        opinionStage.legacy.embedPoll = function(args) {
            if (!opinionStage.legacy.functions.include(opinionStage.legacy.polls, args.poll_id)) {
                opinionStage.legacy.polls.push(args.poll_id);
                opinionStage.legacy.insertIframe("/polls/" + args.poll_id + "/poll", args.width, '0', opinionStage.legacy.polls_locations[args.poll_id])
            }
        };
        opinionStage.legacy.embedPollSet = function(args) {
            if (!opinionStage.legacy.functions.include(opinionStage.legacy.sets, args.set_id)) {
                opinionStage.legacy.sets.push(args.set_id);
                opinionStage.legacy.insertIframe("/sets/" + args.set_id + "/iframe", args.width, '0', opinionStage.legacy.sets_locations[args.set_id])
            }
        };
        opinionStage.legacy.embedWidget = function(args) {
            if (!opinionStage.legacy.functions.include(opinionStage.legacy.widgets, args.widget_id)) {
                opinionStage.legacy.widgets.push(args.widget_id);
                opinionStage.legacy.insertIframe(args.widget_path, args.width, '0', opinionStage.legacy.widgets_locations[args.widget_id])
            }
        };
        opinionStage.legacy.insertIframe = function(path, width, height, div_id) {
            // Add the iframe with height 0 until visible
            var frame = document.createElement('iframe');
            frame.setAttribute('width', width);
            frame.setAttribute('height', height);
            frame.setAttribute('frameBorder','0');
            frame.setAttribute('scrolling','no');
            frame.setAttribute('style','border: none;margin-bottom: 0 !important');
            frame.setAttribute("src", opinionStage.legacy.protocol + "//www.opinionstage.com" + path);
            frame.setAttribute('name', 'os_frame');
            // Following attributes are quired to enabel youtube fullscreen play
            frame.setAttribute('webkitallowfullscreen','');
            frame.setAttribute('mozallowfullscreen','');
            frame.setAttribute('allowfullscreen','');
            var frame_div = document.getElementById(div_id);
            var content_div = opinionStage.legacy.getElementsByClassName(frame_div, "os-content")[0];
            if (content_div == null) {
                content_div = frame_div;
            }
            content_div.insertBefore(frame, content_div.firstChild);
        };
        opinionStage.legacy.addContainerPlaceholders = function(div_id) {
            var container_div = document.getElementById(div_id);
            if (container_div != null) {
                var header_div = document.createElement('div');
                var content_div = document.createElement('div');
                header_div.className = "os-header";
                content_div.className = "os-content";
                container_div.insertBefore(content_div, container_div.firstChild);
                container_div.insertBefore(header_div, container_div.firstChild);
            }
        };
        opinionStage.legacy.insertContainerHeader = function(div_id, html_data) {
            var prefix_data = opinionStage.legacy.parseJson(html_data);
            var os_container = document.getElementById(div_id);
            var content_div = opinionStage.legacy.getElementsByClassName(os_container, "os-header")[0];
            if (content_div != null) {
                var div = document.createElement('div');
                div.innerHTML = prefix_data.plain_html;
                while (div.children.length > 0) {
                    content_div.appendChild(div.children[0]);
                }
            }
        };
        opinionStage.legacy.getElementsByClassName= function(node, classname) {
            // getElementsByClassName not supported in IE8
            if (typeof node.getElementsByClassName !== "undefined") {
                return node.getElementsByClassName(classname);
            }
            var a = [];
            var re = new RegExp('(^| )' + classname + '( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        };
        opinionStage.legacy.hideLoader = function(div_id) {
            var container_div = document.getElementById(div_id);
            if (container_div != null) {
                var loader = opinionStage.legacy.getElementsByClassName(container_div, "os-loader")[0];
                if (loader != null) {
                    loader.style.cssText = "display: none";
                }
            }
        };
        opinionStage.legacy.waitForCommunication = function(callback, args) {
            if (opinionStage.legacy.state.ready == false) {
                setTimeout(function() { opinionStage.legacy.waitForCommunication(callback, args) } , 100);
            } else {
                callback(args);
            }
        };
        opinionStage.legacy.renderNativeContent = function(ad_id, div_id, width, height) {
            opinionStage.legacy.insertIframe("/native_content/" + ad_id, width, height + 'px', div_id)
        };
        opinionStage.legacy.firstTimeInit = function() {
            if (!opinionStage.legacy.state.initialized) {
                opinionStage.legacy.state.initialized = true;
                // Register to the post message method
                opinionStage.legacy.addNativeListener("message", opinionStage.legacy.handleMessage);
                opinionStage.legacy.state.ready = true;
            }
        };
        opinionStage.legacy.firstTimeInit();
    }
})(window.OpinionStage = window.OpinionStage || {} );
  OpinionStage.legacy.addPollLocation(2324434, "debate_1_" + 2324434);
  OpinionStage.legacy.insertLoader("debate_1_" + 2324434);
  OpinionStage.legacy.waitForCommunication(OpinionStage.legacy.embedPoll, {poll_id: 2324434, width: '100%'});
