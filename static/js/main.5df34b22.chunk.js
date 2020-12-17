(this.webpackJsonpvisual_git=this.webpackJsonpvisual_git||[]).push([[0],{116:function(t,e,r){"use strict";r.r(e);var i=r(1),n=r(0),a=r(40),s=r.n(a),c=r(10),o=r(41),h=r.n(o),l=(r(95),r(45)),u=r.n(l),d=r(46),m=(r(97),function(t){return Object(i.jsx)("li",{className:t.currentPage==t.title?"active":"",children:Object(i.jsx)("a",{href:t.url,children:t.title})})}),g=function(t){var e=Object(n.useState)(!1),r=Object(c.a)(e,2),a=r[0],s=r[1];return Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)("div",{className:"desktop",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)(m,{title:"Home",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"About",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Tutorial",url:"#",currentPage:t.currentPage}),Object(i.jsx)("li",{children:Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("h2",{children:"Visual Git"})})}),Object(i.jsx)(m,{title:"Commands",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Source on GitHub",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Share",url:"#",currentPage:t.currentPage})]})}),Object(i.jsxs)("div",{className:"mobile",children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("h2",{children:"Visual Git"})}),Object(i.jsx)(d.a,{sidebar:Object(i.jsx)("div",{className:"drawerMenu",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)(m,{title:"Home",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"About",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Tutorial",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Commands",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Source on GitHub",url:"#",currentPage:t.currentPage}),Object(i.jsx)(m,{title:"Share",url:"#",currentPage:t.currentPage})]})}),open:a,docked:a,onSetOpen:function(){return s(!a)},styles:{sidebar:{background:"white"}},children:Object(i.jsx)("div",{style:{padding:10},children:Object(i.jsx)(u.a,{isOpen:a,menuClicked:function(){return s(!a)},width:18,height:15,strokeWidth:2,rotate:0,color:"black",borderRadius:0,animationDuration:.5})})})]})]})},b=r(51),f=r(48),p=function(t){var e=Object(n.useState)({scale:.6,translation:{x:0,y:0}}),r=Object(c.a)(e,2),a=r[0],s=r[1];return console.log(t),Object(i.jsx)("div",{children:Object(i.jsx)(f.MapInteractionCSS,{value:a,onChange:function(t){return s(t)},showControls:!0,children:Object(i.jsx)(b.a,{options:{orientation:"horizontal"},children:function(e){var r=e.branch("master");r.commit("Initial commit");var i=e.branch("develop");if(i.commit("Add TypeScript"),t.initalized){var n=e.branch("a-feature");n.commit("Make it work").commit("Make it right").commit("Make it fast"),i.merge(n)}i.commit("Prepare v1"),a.scale<1&&r.merge(i).tag("v1.0.0")}})})})},j=r(26),v=r(49),x=r(50),O=function(){function t(){Object(v.a)(this,t),this.state={initializedRepo:!1,currentBranch:"main",branches:[{name:"main",head:"",merges:[]}],commands:[],tree:{}}}return Object(x.a)(t,[{key:"commitHistory",value:function(t){var e=[],r=this.state.tree[t],i="";for(0==r.length?i=this.state.branches.find((function(e){return e.name==t})).head:(i=r[0].lastCommit,e=r.reverse());""!=i;)for(var n in this.state.tree){var a=this.state.tree[n].find((function(t){return t.id==i}));void 0!=a&&(e=[].concat(Object(j.a)(e),[a]),i=a.lastCommit)}return e.reverse()}},{key:"merge",value:function(t){if(0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";if(t.length<1)return"fatal: branch name is not passed as parameter";var e=t[0],r=this.state.branches.findIndex((function(t){return t.name==e}));if(-1==r)return"git error: branch with name "+e+" doesn't exists";var i=this.commitHistory(e),n=this.commitHistory(this.state.currentBranch),a=0;return i.forEach((function(t){void 0==n.find((function(e){return e.id==t.id}))&&(a++,n.push(t))})),0==a?"git: no commits to merge from "+e+".\nBranch is already up to date.":(this.state.tree[this.state.currentBranch]=n.sort((function(t,e){return t.timeStamp-e.timeStamp})),this.state.branches[r].merges.push({target:this.state.currentBranch,id:i[i.length-1].id}),"Merged branch "+e+" to "+this.state.currentBranch+".\n"+a+" commits pushed successfully.")}},{key:"status",value:function(){if(console.log(this.state),0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";var t="On branch "+this.state.currentBranch+"\n";0!=this.state.commands.length&&"add"==this.state.commands[this.state.commands.length-1].command&&(t+="no changes added to commit (use git commit command) \n");var e=0;return null!=this.state.tree[this.state.currentBranch]&&this.state.tree[this.state.currentBranch].forEach((function(t){0==t.pushed&&e++})),t+=e>0?"Your branch is "+e+" commits ahead the remote origin. \n":"Your branch is up to date with the remote origin."}},{key:"checkout",value:function(t){if(0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";if(0==t.length)return this.listAllBranches();if("-b"==t[0]){if(t.length<2)return"fatal: branch name is not passed as parameter";var e=t[1];return-1!=this.state.branches.findIndex((function(t){return t.name==e}))?"fatal: branch already exists with the name: "+e:(this.branch([e]),this.state.currentBranch=e,"Switched to new branch "+e+"\n"+this.listAllBranches())}return-1==this.state.branches.findIndex((function(e){return e.name==t[0]}))?"fatal: branch with name "+t[0]+" doesn't exists.":(this.state.currentBranch=t[0],"switched to branch "+t[0]+"\n"+this.listAllBranches())}},{key:"listAllBranches",value:function(){var t=this,e="";return this.state.branches.forEach((function(r){r.name==t.state.currentBranch?e+=r.name+" * \n":e+=r.name+"\n"})),e}},{key:"branch",value:function(t){if(0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";if(0==t.length)return this.listAllBranches();if("-a"==t[0])return this.listAllBranches();if("-d"==t[0]){if(t.length<2)return"git branch -d : branch name not passed as parameter";var e=t[1];return-1==this.state.branches.findIndex((function(t){return t.name==e}))?"git error: branch with name "+e+" doesn't exists":"main"==e?"cannot delete main branch of the git repository":(this.state.currentBranch==e&&(this.state.currentBranch="main"),this.state.branches=this.state.branches.filter((function(t){return t.name!=e})),delete this.state.tree[e],"Deleted branch "+e+" from the git repository. \nHead at "+this.state.currentBranch+" branch")}e=t[0];if(-1!=this.state.branches.findIndex((function(t){return t.name==e})))return"git error: branch with name "+e+" already exists";var r=this.state.tree[this.state.currentBranch];return this.state.branches.push({name:e,head:null!=r&&r.length>0?r[r.length-1].id:"",merges:[]}),this.state.tree[e]=[],"created new branch "+e+"\n"+this.listAllBranches()}},{key:"commit",value:function(t){var e=this;if(0==this.state.initializedRepo)return"fatal: not a git repository (or any of the parent directories): .git";if(0==t.length)return"no parameters passed to git commit";if("-am"==t[0]&&this.add(),0==this.state.commands.length||"add"!=this.state.commands[this.state.commands.length-1].command)return"no changes added to commit";if("-m"==t[0]||"-am"==t[0]){var r;t=t.slice(1);var i="";t.forEach((function(t){i+=t.replaceAll('"',"")+" "})),i.slice(0,i.length-1);var n=Math.random().toString(36).slice(2).substr(0,7),a=null!==(r=this.state.tree[this.state.currentBranch])&&void 0!==r?r:[];return this.state.tree[this.state.currentBranch]=[].concat(Object(j.a)(a),[{id:n,commit:i,pushed:!1,timeStamp:Date.now(),lastCommit:null!=a?a.length>0?a[a.length-1].id:this.state.branches.find((function(t){return t.name==e.state.currentBranch})).head:""}]),this.state.commands.push({command:"commit",description:"commit added"}),n+" commit added to the "+this.state.currentBranch+" branch"}return"git commit "+t[0]+": not found."}},{key:"add",value:function(){return 1==this.state.initializedRepo?(this.state.commands.push({command:"add",description:"added unstaged changes"}),"added unstaged changes"):"fatal: not a git repository (or any of the parent directories): .git"}},{key:"initRepo",value:function(){return 0==this.state.initializedRepo?(this.state.initializedRepo=!0,"Initialized empty Git repository."):"Re-initialized git repository."}},{key:"exec",value:function(t,e,r){switch(t[0]){case"init":e(this.initRepo());break;case"add":e(this.add());break;case"commit":e(this.commit(t.slice(1)));break;case"branch":e(this.branch(t.slice(1)));break;case"checkout":e(this.checkout(t.slice(1)));break;case"status":e(this.status());break;case"merge":e(this.merge(t.slice(1)));break;case void 0:e("Welcome to Visual Git!\nThese are common Git commands used in various situations:\n"),this.help(e);break;default:e("No such git command.")}return this.state}},{key:"help",value:function(t){t("Help command version 0.0.1\n git init : Create an empty Git repository or reinitialize an existing one \n git add : Add file contents to the index \n git commit : Record changes to the repository \n git push : Update remote refs along with associated objects \n git branch : List, create, or delete branches \n git checkout : Switch branches or restore working tree files \n git merge : Join two or more development histories together \n git status : Show the working tree status")}}]),t}(),y=function(){var t,e=new O,r=Object(n.useState)({}),a=Object(c.a)(r,2),s=a[0],o=a[1];return console.log(s),Object(i.jsxs)("div",{children:[Object(i.jsx)(g,{currentPage:"Home"}),Object(i.jsxs)("div",{className:"body",children:[Object(i.jsx)("div",{className:"terminal",children:Object(i.jsx)(h.a,{color:"white",backgroundColor:"black",hideTopBar:!0,allowTabs:!1,promptSymbol:"$",style:{fontWeight:"bold",fontSize:"1em"},commands:{git:function(t,r,i){return o(e.exec(t.slice(1),r,i))},help:function(t,r,i){e.help(r)}},descriptions:{"git init":"Create an empty Git repository or reinitialize an existing one","git add":"Add file contents to the index","git commit":"Record changes to the repository","git push":"Update remote refs along with associated objects","git branch":"List, create, or delete branches","git checkout":"Switch branches or restore working tree files","git merge":"Join two or more development histories together","git status":"Show the working tree status"},msg:"Welcome to Visual Git Console! Start by initializing a git repository."})}),Object(i.jsx)("div",{className:"visual",children:Object(i.jsx)(p,{initalized:null!==(t=s.initializedRepo)&&void 0!==t&&t})})]})]})};s.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))},95:function(t,e,r){},97:function(t,e,r){}},[[116,1,2]]]);
//# sourceMappingURL=main.5df34b22.chunk.js.map