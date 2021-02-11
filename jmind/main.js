var _jm = null;
function load_jsmind() {
    var mind = {
        meta: {
            name: 'demo',
            author: 'yangboyu@yangboyu.net',
            version: '0.2'
        },
        "format": "node_tree",
        "data": {
            "id": "root", "topic": "Root"
        }
    };
    var options = {
        container: 'jsmind_container',
        editable: true,
        theme: 'greensea',
        view: {
            engine: 'canvas',
            line_width: 2,       // 思维导图线条的粗细
            line_color: '#555'   // 思维导图线条的颜色
        },
        shortcut: {
            enable: true,
            handles: {},
            mapping: {
                addchild: 45,    // <Insert>
                addbrother: 13,    // <Enter>
                editnode: 113,   // <F2>
                delnode: 46,    // <Delete>
                toggle: 32,    // <Space>
                left: 37,    // <Left>
                up: 38,    // <Up>
                right: 39,    // <Right>
                down: 40,    // <Down>
            }
        }
    }
    _jm = jsMind.show(options, mind);
    // jm.set_readonly(true);
    // var mind_data = jm.get_data();
    // alert(mind_data);
}

//style.js
function set_theme(theme_name) {
    _jm.set_theme(theme_name);
}

//edit.js
function add_node() {
    var selected_node = _jm.get_selected_node(); // as parent of new node
    if (!selected_node) { prompt_info('please select a node first.'); return; }

    var nodeid = jsMind.util.uuid.newid();
    var topic = '* Node_' + nodeid.substr(nodeid.length - 6) + ' *';
    var node = _jm.add_node(selected_node, nodeid, topic);
}


function add_image_node() {
    var selected_node = _jm.get_selected_node(); // as parent of new node
    if (!selected_node) {
        prompt_info('please select a node first.');
        return;
    }

    imageChooser.focus();
    imageChooser.click();
}

function move_to_first() {
    var selected_id = get_selected_nodeid();
    if (!selected_id) { prompt_info('please select a node first.'); return; }

    _jm.move_node(selected_id, '_first_');
}

function move_to_last() {
    var selected_id = get_selected_nodeid();
    if (!selected_id) { prompt_info('please select a node first.'); return; }

    _jm.move_node(selected_id, '_last_');
}

function toggle_editable(btn) {
    var editable = _jm.get_editable();
    if (editable) {
        _jm.disable_edit();
        btn.classList.remove("btn-danger")
        btn.classList.add("active", "btn-success")
        btn.innerHTML = 'enable<br/>editable';
    } else {
        _jm.enable_edit();
        btn.classList.remove("btn-success", "active")
        btn.classList.add("btn-danger")
        btn.innerHTML = 'disable<br/>editable';
    }
}

function modify_node() {
    var selected_id = get_selected_nodeid();
    if (!selected_id) { prompt_info('please select a node first.'); return; }

    // modify the topic
    _jm.update_node(selected_id, document.getElementById("modify_text").value);
}

function remove_node() {
    var selected_id = get_selected_nodeid();
    if (!selected_id) { prompt_info('please select a node first.'); return; }

    _jm.remove_node(selected_id);
}
function get_selected_nodeid() {
    var selected_node = _jm.get_selected_node();
    if (!!selected_node) {
        return selected_node.id;
    } else {
        return null;
    }
}

//style
function change_text_size(size) {
    var selected_id = get_selected_nodeid();
    if (!selected_id) { prompt_info('please select a node first.'); return; }

    _jm.set_node_font_style(selected_id, size);
}

function change_text_color(color) {
    var selected_id = get_selected_nodeid();
    if (!selected_id) { prompt_info('please select a node first.'); return; }

    _jm.set_node_color(selected_id, null, color);
}

var zoomInButton = document.getElementById("zoom-in-button");
var zoomOutButton = document.getElementById("zoom-out-button");

function zoomIn() {
    if (_jm.view.zoomIn()) {
        zoomOutButton.disabled = false;
    } else {
        zoomInButton.disabled = true;
    };
};

function zoomOut() {
    if (_jm.view.zoomOut()) {
        zoomInButton.disabled = false;
    } else {
        zoomOutButton.disabled = true;
    };
};

//save
function save_freemind_file(){
    var mind_data = _jm.get_data('freemind');
    var mind_name = mind_data.meta.name || 'freemind';
    var mind_str = mind_data.data;
    jsMind.util.file.save(mind_str,'text/xml',mind_name+'.mm');
}

function screen_shot(){
    _jm.screenshot.shootDownload();
}


var imageChooser = null
window.onload = function () {
    load_jsmind()
    setPanel()
    imageChooser = document.getElementById('image-chooser');
    imageChooser.addEventListener('change', function (event) {
        // Read file here.
        var reader = new FileReader();
        reader.onloadend = (function () {
            var selected_node = _jm.get_selected_node();
            var nodeid = jsMind.util.uuid.newid();
            var topic = undefined;
            var data = {
                "background-image": reader.result,
                "width": "100",
                "height": "100"
            };
            var node = _jm.add_node(selected_node, nodeid, topic, data);
            //var node = _jm.add_image_node(selected_node, nodeid, reader.result, 100, 100);
            //add_image_node:function(parent_node, nodeid, image, width, height, data, idx, direction, expanded){
        });

        var file = imageChooser.files[0];
        if (file) {
            reader.readAsDataURL(file);
        };

    }, false);
}