(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),d=n.n(o),a=n(4),c=n.n(a),r=n(5),i=n(6),s=n(8),u=n(7),b=n(2),l=n.n(b),j=n(0),h=function(e){var t=e.onEddGood,n=e.onEddNeutral,o=e.onEddBad;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:t,className:l.a.button,children:"Good"}),Object(j.jsx)("button",{onClick:n,className:l.a.button,children:"Neutral"}),Object(j.jsx)("button",{onClick:o,className:l.a.button,children:"Bed"})]})},O=function(e){var t=e.good,n=e.neutral,o=e.bad,d=e.onCountTotalFeedback,a=e.onCountPositiveFeedbackPercentage;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good:",t]}),Object(j.jsxs)("p",{children:["Neutral:",n]}),Object(j.jsxs)("p",{children:["Bed:",o]}),Object(j.jsxs)("p",{children:["Total:",d]}),Object(j.jsxs)("p",{children:["Positive Feedback:",a,"%"]})]})},x=function(){return Object(j.jsx)("p",{children:"No feedback given"})},f=function(e){var t=e.good,n=e.neutral,o=e.bad,d=e.onEddGood,a=e.onEddNeutral,c=e.onEddBad,r=e.onCountTotalFeedback,i=e.onCountPositiveFeedbackPercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Please leave feedback"}),Object(j.jsx)(h,{onEddGood:d,onEddNeutral:a,onEddBad:c}),Object(j.jsx)("h2",{children:"Statistics"}),0===r?Object(j.jsx)(x,{}):Object(j.jsx)(O,{good:t,neutral:n,bad:o,onCountTotalFeedback:r,onCountPositiveFeedbackPercentage:i})]})},k=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,d=new Array(o),a=0;a<o;a++)d[a]=arguments[a];return(e=t.call.apply(t,[this].concat(d))).state={good:0,neutral:0,bad:0},e.eddGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.eddNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.eddBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,o=e.bad,d=this.eddGood,a=this.eddNeutral,c=this.eddBad,r=t+n+o,i=(0===r?0:100*t/r).toFixed();return Object(j.jsx)(f,{good:t,neutral:n,bad:o,onEddGood:d,onEddNeutral:a,onEddBad:c,onCountTotalFeedback:r,onCountPositiveFeedbackPercentage:i})}}]),n}(o.Component));c.a.render(Object(j.jsx)(d.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={button:"FeedbackOptions_button__2TaV8"}}},[[15,1,2]]]);
//# sourceMappingURL=main.6f5242bf.chunk.js.map