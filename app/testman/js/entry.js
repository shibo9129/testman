class App {
    constructor(attachTag) {
	this.attachTag = attachTag;
	this.components = [];
    }

    addComponents(components) {
	this.components = this.components.concat(components);
    }

    render() {
	var parent = document.getElementsByTagName(this.attachTag)[0];
	var ol = document.createElement("ol");
	for (var i in this.components) {
	    var component = this.components[i];
	    var li = this.makeListItem(component);
	    console.log(component);
	    console.log(li);
	    console.log(component.name);
	    ol.appendChild(li);
	}

	parent.append(ol);
    }

    makeListItem(componentInfo) {
	console.log(componentInfo);
	var li = document.createElement("li");
	li.innerHTML = `<div>
<p>${componentInfo.name}</p>
<a target=_blank href="${componentInfo.entry}">entry</a>
</div>
`;
	return li;
    }
}

class ComponentInfo {
    constructor(name, link) {
	this.name = name;
	this.entry = link;
    }
}


(function() {
    var app = new App("body");
    var components = [
	new ComponentInfo("测试账号、数据库信息",
			  "https://shimo.im/sheet/LRUcyY0HWMAFDWql/iwHfK/"),
	new ComponentInfo("网厅地址",
			  "http://172.24.141.161/gxwt/pc/index"),
	new ComponentInfo("测试管理后台",
			  "http://172.24.148.23:8080/gsmp/"),
	new ComponentInfo("测试用例",
			  "../content/testcase.html")
	
    ];
    app.addComponents(components);
    app.render();
})();

