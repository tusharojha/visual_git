(this.webpackJsonpvisual_git=this.webpackJsonpvisual_git||[]).push([[0],{73:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i(1),a=i(19),s=i.n(a),c=i(12),o=i(20),h=i.n(o),l=(i(73),i(24)),d=i.n(l),u=i(25),m=(i(75),function(e){return Object(r.jsx)("li",{className:e.currentPage==e.title?"active":"",children:Object(r.jsx)("a",{href:e.url,children:e.title})})}),g=function(e){var t=Object(n.useState)(!1),i=Object(c.a)(t,2),a=i[0],s=i[1];return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)("div",{className:"desktop",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)(m,{title:"Home",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"About",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Tutorial",url:"#",currentPage:e.currentPage}),Object(r.jsx)("li",{children:Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("h2",{children:"Visual Git"})})}),Object(r.jsx)(m,{title:"Commands",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Source on GitHub",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Share",url:"#",currentPage:e.currentPage})]})}),Object(r.jsxs)("div",{className:"mobile",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("h2",{children:"Visual Git"})}),Object(r.jsx)(u.a,{sidebar:Object(r.jsx)("div",{className:"drawerMenu",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)(m,{title:"Home",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"About",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Tutorial",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Commands",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Source on GitHub",url:"#",currentPage:e.currentPage}),Object(r.jsx)(m,{title:"Share",url:"#",currentPage:e.currentPage})]})}),open:a,docked:a,onSetOpen:function(){return s(!a)},styles:{sidebar:{background:"white"}},children:Object(r.jsx)("div",{style:{padding:10},children:Object(r.jsx)(d.a,{isOpen:a,menuClicked:function(){return s(!a)},width:18,height:15,strokeWidth:2,rotate:0,color:"black",borderRadius:0,animationDuration:.5})})})]})]})},b=i(29),j=i(27),p=i(28),f=function(){function e(){Object(j.a)(this,e),this.state={initializedRepo:!1,currentBranch:"main",branches:[{name:"main",head:""}],commands:[],tree:{}}}return Object(p.a)(e,[{key:"listAllBranches",value:function(){var e=this,t="";return this.state.branches.forEach((function(i){i.name==e.state.currentBranch?t+=i.name+" * \n":t+=i.name+"\n"})),t}},{key:"branch",value:function(e){if(0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";if(0==e.length)return this.listAllBranches();if("-a"==e[0])return this.listAllBranches();if("-d"==e[0]){if(e.length<2)return"git branch -d : branch name not passed as parameter";var t=e[1];return-1==this.state.branches.findIndex((function(e){return e.name==t}))?"git error: branch with name "+t+" doesn't exists":"main"==t?"cannot delete main branch of the git repository":(this.state.currentBranch==t&&(this.state.currentBranch="main"),this.state.branches=this.state.branches.filter((function(e){return e.name!=t})),delete this.state.tree[t],"Deleted branch "+t+" from the git repository. \nHead at "+this.state.currentBranch+" branch")}t=e[0];if(-1!=this.state.branches.findIndex((function(e){return e.name==t})))return"git error: branch with name "+t+" already exists";var i=this.state.tree[this.state.currentBranch];return this.state.branches.push({name:t,head:null!=i&&i.length>0?i[i.length-1].id:""}),this.state.tree[t]=[],"created new branch "+t+"\n"+this.listAllBranches()}},{key:"commit",value:function(e){if(0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";if(0==e.length)return"no parameters passed to git commit";if("-am"==e[0]&&this.add(),0==this.state.commands.length||"add"!=this.state.commands[this.state.commands.length-1].command)return"no changes added to commit";if("-m"==e[0]||"-am"==e[0]){var t;e=e.slice(1);var i="";e.forEach((function(e){i+=e.replaceAll('"',"")+" "})),i.slice(0,i.length-1);var r=Math.random().toString(36).slice(2).substr(0,6),n=null!==(t=this.state.tree[this.state.currentBranch])&&void 0!==t?t:[];return this.state.tree[this.state.currentBranch]=[].concat(Object(b.a)(n),[{id:r,commit:i,lastCommit:null!=n&&n.length>0?n[n.length-1].id:""}]),console.log(this.state),this.state.commands.push({command:"commit",description:"commit added"}),r+" commit added to the "+this.state.currentBranch+" branch"}return"git commit "+e[0]+": not found."}},{key:"add",value:function(){return 1==this.state.initializedRepo?(this.state.commands.push({command:"add",description:"added unstaged changes"}),"added unstaged changes"):"fatal: not a git repository (or any of the parent directories): .git"}},{key:"initRepo",value:function(){return 0==this.state.initializedRepo?(this.state.initializedRepo=!0,"Initialized empty Git repository."):"Re-initialized git repository."}},{key:"exec",value:function(e,t,i){switch(e[0]){case"init":t(this.initRepo());break;case"add":t(this.add());break;case"commit":t(this.commit(e.slice(1)));break;case"branch":t(this.branch(e.slice(1)));break;default:t("No such git command.")}return this.state}},{key:"help",value:function(e){e("Help command version 0.0.1\n git init : Create an empty Git repository or reinitialize an existing one \n git add : Add file contents to the index \n git commit : Record changes to the repository \n git push : Update remote refs along with associated objects \n git branch : List, create, or delete branches \n git checkout : Switch branches or restore working tree files \n git merge : Join two or more development histories together \n git status : Show the working tree status")}}]),e}(),x=function(){var e=new f,t=Object(n.useState)({}),i=Object(c.a)(t,2),a=(i[0],i[1]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{currentPage:"Home"}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)("div",{className:"terminal",children:Object(r.jsx)(h.a,{color:"white",backgroundColor:"black",hideTopBar:!0,allowTabs:!1,promptSymbol:"$",style:{fontWeight:"bold",fontSize:"1em"},commands:{git:function(t,i,r){return a(e.exec(t.slice(1),i,r))},help:function(t,i,r){e.help(i)}},descriptions:{"git init":"Create an empty Git repository or reinitialize an existing one","git add":"Add file contents to the index","git commit":"Record changes to the repository","git push":"Update remote refs along with associated objects","git branch":"List, create, or delete branches","git checkout":"Switch branches or restore working tree files","git merge":"Join two or more development histories together","git status":"Show the working tree status"},msg:"Welcome to Git Console! Start by initializing a git repository."})}),Object(r.jsx)("div",{className:"visual",children:Object(r.jsx)("p",{children:"Tree"})})]})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.2cfd56ca.chunk.js.map