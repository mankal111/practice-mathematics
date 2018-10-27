(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=(n(194),n(7)),o=n.n(s),r=n(46),c=n.n(r),l=(n(293),n(232),n(233)),u=(n(49),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={steps:[],animationIndex:0},n.stepComponent=n.stepComponent.bind(c()(c()(n))),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({steps:this.props.steps,animationIndex:0}),setInterval(function(){e.setState({animationIndex:e.state.animationIndex+1})},1e3)},n.stepComponent=function(e){return e.constructor===Array?a.a.createElement(l.BlockMath,{math:e[this.state.animationIndex%e.length]}):a.a.createElement(l.BlockMath,{math:e})},n.render=function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h3",null,"Solution:"),this.state.steps.map(function(t){return e.stepComponent(t)}))},t}(a.a.Component)),h=n(301),m=n.n(h),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={answerValue:"",solutionVisible:!1},n.handleChange=n.handleChange.bind(c()(c()(n))),n.handleSubmit=n.handleSubmit.bind(c()(c()(n))),n.toggleSolution=n.toggleSolution.bind(c()(c()(n))),n.newExercise=n.newExercise.bind(c()(c()(n))),n}o()(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({answerValue:e.target.value})},n.handleSubmit=function(e){Number(this.state.answerValue)===this.props.answer?alert("Correct!"):alert("Sorry... "+this.state.answerValue+" is not the correct answer."),e.preventDefault()},n.toggleSolution=function(){this.setState({solutionVisible:!this.state.solutionVisible})},n.newExercise=function(){this.props.generateNewValues(),this.setState({answerValue:"",solutionVisible:!1})},n.render=function(){return a.a.createElement("div",{className:m.a.container},a.a.createElement("h2",{className:m.a.title},this.props.title),a.a.createElement("div",null,this.props.description),a.a.createElement(l.BlockMath,{math:this.props.question}),a.a.createElement("form",{onSubmit:this.handleSubmit,className:m.a.form},a.a.createElement("label",null,"Answer:",a.a.createElement("input",{type:"text",value:this.state.answerValue,onChange:this.handleChange})),a.a.createElement("input",{type:"submit",value:"Check",className:m.a.button})),a.a.createElement("span",{className:m.a.button,onClick:this.toggleSolution},"Solution"),a.a.createElement("span",{className:m.a.button,onClick:this.newExercise},"New Exercise"),this.state.solutionVisible&&a.a.createElement(u,{steps:this.props.solution}))},t}(a.a.Component),f=n(234),x=n.n(f),g=n(235),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={coefficient:0,exponent:0},n.generateValues=n.generateValues.bind(c()(c()(n))),n}o()(t,e);var n=t.prototype;return n.generateValues=function(e){this.setState({coefficient:x.a.getNumber({min:1,max:9.999}).toFixed(x.a.getNumber({min:0,max:4,type:"integer"})),exponent:x.a.getNumber({min:-6,max:6,type:"integer"})})},n.componentDidMount=function(){this.generateValues()},n.generateSolutionArray=function(){var e=[];e.push([]);for(var t=this.state.exponent;0!=t;t=this.state.exponent>0?t-1:t+1)e[0].push(g.eval(this.state.coefficient+"*10^"+(this.state.exponent-t))+"\\times10^{"+t+"}");return e[0].push(g.eval(this.state.coefficient+"*10^"+this.state.exponent)+"\\times10^0"),e[0].push(g.eval(this.state.coefficient+"*10^"+this.state.exponent)+"\\times1"),e.push(""+g.eval(this.state.coefficient+"*10^"+this.state.exponent)),e},n.render=function(){return a.a.createElement(p,{title:"Convert Scientific to Decimal notation",description:"Practice on converting Decimal to Scientific notation",question:"\\text{Write the number } "+this.state.coefficient+"\\times10^{"+this.state.exponent+"} \\text{ in Decimal notation}",answer:this.state.coefficient*Math.pow(10,this.state.exponent),solution:this.generateSolutionArray(),generateNewValues:this.generateValues})},t}(a.a.Component),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={coefficient:0,exponent:0},n.generateValues=n.generateValues.bind(c()(c()(n))),n}o()(t,e);var n=t.prototype;return n.generateValues=function(e){this.setState({coefficient:g.bignumber(x.a.getNumber({min:1,max:9.999}).toFixed(x.a.getNumber({min:0,max:4,type:"integer"}))),exponent:x.a.getNumber({min:-6,max:6,type:"integer"})})},n.componentDidMount=function(){this.generateValues()},n.generateSolutionArray=function(){var e=[];e.push([]);for(var t=0;t!=this.state.exponent;t=this.state.exponent>0?t+1:t-1)e[0].push(g.eval(this.state.coefficient+"*10^"+(this.state.exponent-t))+"\\times10^{"+t+"}");return e[0].push(this.state.coefficient+"\\times10^{"+this.state.exponent+"}"),e.push(this.state.coefficient+"\\times10^{"+this.state.exponent+"}"),e},n.render=function(){return a.a.createElement(p,{title:"Convert Decimal to Scientific notation",description:"Practice on converting Decimal to Scientific notation",question:"\\text{Write the number } "+g.eval(this.state.coefficient+"*10^"+this.state.exponent)+" \\text{ in Scientific notation}",answer:this.state.coefficient*Math.pow(10,this.state.exponent),solution:this.generateSolutionArray(),generateNewValues:this.generateValues})},t}(a.a.Component),v=n(725),E=n.n(v);t.default=function(){return a.a.createElement("div",{className:E.a.main},a.a.createElement("h1",null,"Electromagnetism exercises"),a.a.createElement(d,null),a.a.createElement(b,null))}},301:function(e,t,n){e.exports={container:"Exercise-module--container--1wyuF",title:"Exercise-module--title--LvNFV",form:"Exercise-module--form--10q8T",button:"Exercise-module--button--1wUlw"}},725:function(e,t,n){e.exports={main:"index-module--main--iJBX4"}}}]);
//# sourceMappingURL=component---src-pages-index-js-24c430eebf0a33707d82.js.map