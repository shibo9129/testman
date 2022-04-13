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
<a target=_blank href="${componentInfo.gitlab}">GitLab</a>
<a target=_blank href="${componentInfo.jenkins}">Jenkins</a>
<a target=_blank href="${componentInfo.devops}">Devops</a>
</div>
`;
	return li;
    }
}

class ComponentInfo {
    constructor(name, gitlabLink, jenkinsLink, devopsLink) {
	this.name = name;
	this.gitlab = gitlabLink;
	this.jenkins = jenkinsLink;
	this.devops = devopsLink;
    }
}


(function() {
    var app = new App("body");
    var components = [
	new ComponentInfo("金太阳行情191服务",
			  "http://172.24.148.21/wangqian/HQServer_191",
			  "http://172.24.148.14:8080/job/HQServer_191_build/",
			  "http://172.24.148.33/app/5b485f13da4c4/packages"),
	new ComponentInfo("金太阳行情291服务",
			  "http://172.24.148.21/wangqian/HQServer_291",
			  "http://172.24.148.14:8080/job/HQServer_291_build/",
			  "http://172.24.148.33/app/5b48642471596/packages"),
	new ComponentInfo("金太阳行情193服务",
			  "http://172.24.148.21/wangqian/HQServer_193",
			  "http://172.24.148.14:8080/job/HQServer_193_build/",
			  "http://172.24.148.33/app/5b485ed7552b9/packages"),
	new ComponentInfo("金太阳外TC",
			  "http://172.24.148.21/wangqian/OuterTC",
			  "http://172.24.148.14:8080/job/OuterTC_build/",
			  "http://172.24.148.33/app/583ffcd9c4864/packages"),
	new ComponentInfo("金太阳功能内TC",
			  "http://172.24.148.21/wangqian/InnerTC",
			  "http://172.24.148.14:8080/job/InnerTC_build/",
			  "http://172.24.148.33/app/5a30c7aa9b4d9/packages"),
	new ComponentInfo("金太阳内行情TC",
			  "http://172.24.148.21/wangqian/InnerTC_HQ",
			  "http://172.24.148.14:8080/job/InnerTC_HQ_build/",
			  "http://172.24.148.33/app/583ffcd9e2321/packages"),
	new ComponentInfo("EDB",
			  "http://172.24.148.21/wangqian/EDB",
			  "http://172.24.148.14:8080/job/EDB_build/",
			  "http://172.24.148.33/app/5b4864689049e/packages"),
	new ComponentInfo("castamere",
			  "http://172.24.148.21/yuht/castamere",
			  "http://172.24.148.14:8080/job/castamere_build/",
			  "http://172.24.148.33/app/5be2abf703384/packages")
	
    ];
    app.addComponents(components);
    app.render();
})();

