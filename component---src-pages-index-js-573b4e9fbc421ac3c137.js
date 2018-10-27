(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=(n(211),n(7)),o=n.n(s),r=n(46),l=n.n(r),u=(n(291),n(232),n(233)),c=(n(49),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={steps:[],animationIndex:0},n.stepComponent=n.stepComponent.bind(l()(l()(n))),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({steps:this.props.steps,animationIndex:0}),setInterval(function(){e.setState({animationIndex:e.state.animationIndex+1})},1e3)},n.stepComponent=function(e){return e.constructor===Array?a.a.createElement(u.BlockMath,{math:e[this.state.animationIndex%e.length]}):a.a.createElement(u.BlockMath,{math:e})},n.render=function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h3",null,"Solution:"),this.state.steps.map(function(t){return e.stepComponent(t)}))},t}(a.a.Component)),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={answerValue:"",solutionVisible:!1},n.handleChange=n.handleChange.bind(l()(l()(n))),n.handleSubmit=n.handleSubmit.bind(l()(l()(n))),n.toggleSolution=n.toggleSolution.bind(l()(l()(n))),n.newExercise=n.newExercise.bind(l()(l()(n))),n}o()(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({answerValue:e.target.value})},n.handleSubmit=function(e){Number(this.state.answerValue)===this.props.answer?alert("Correct!"):alert("Sorry... "+this.state.answerValue+" is not the correct answer."),e.preventDefault()},n.toggleSolution=function(){this.setState({solutionVisible:!this.state.solutionVisible})},n.newExercise=function(){this.props.generateNewValues(),this.setState({solutionVisible:!1})},n.render=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,this.props.title),a.a.createElement("div",null,this.props.description),a.a.createElement(u.BlockMath,{math:this.props.question}),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null,"Answer:",a.a.createElement("input",{type:"text",value:this.state.answerValue,onChange:this.handleChange})),a.a.createElement("input",{type:"submit",value:"Check"})),a.a.createElement("button",{onClick:this.toggleSolution},"Solution"),a.a.createElement("button",{onClick:this.newExercise},"New Exercise"),this.state.solutionVisible&&a.a.createElement(c,{steps:this.props.solution}))},t}(a.a.Component),p=n(299),m=n.n(p),f=n(300),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={coefficient:0,exponent:0},n.generateValues=n.generateValues.bind(l()(l()(n))),n}o()(t,e);var n=t.prototype;return n.generateValues=function(e){this.setState({coefficient:m.a.getNumber({min:1,max:1.999}).toFixed(m.a.getNumber({min:0,max:4,type:"integer"})),exponent:m.a.getNumber({min:-6,max:6,type:"integer"})})},n.componentDidMount=function(){this.generateValues()},n.generateSolutionArray=function(){var e=[];e.push([]);for(var t=this.state.exponent;0!=t;t=this.state.exponent>0?t-1:t+1)e[0].push(f.eval(this.state.coefficient+"*10^"+(this.state.exponent-t))+"\\times10^{"+t+"}");return e[0].push(f.eval(this.state.coefficient+"*10^"+this.state.exponent)+"\\times10^0"),e[0].push(f.eval(this.state.coefficient+"*10^"+this.state.exponent)+"\\times1"),e.push(""+f.eval(this.state.coefficient+"*10^"+this.state.exponent)),e},n.render=function(){return a.a.createElement(h,{title:"Convert Scientific to Decimal notation",description:"Practice on converting Decimal to Scientific notation",question:"\\text{Write the number } "+this.state.coefficient+"\\times10^{"+this.state.exponent+"} \\text{ in Decimal notation}",answer:this.state.coefficient*Math.pow(10,this.state.exponent),solution:this.generateSolutionArray(),generateNewValues:this.generateValues})},t}(a.a.Component);a.a.Component,t.default=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Electromagnetism exercises"),a.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-573b4e9fbc421ac3c137.js.map