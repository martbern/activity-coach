(this["webpackJsonpactivity-coach"]=this["webpackJsonpactivity-coach"]||[]).push([[0],{14:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var o=r(1),n=r(9),a=r.n(n),s=(r(14),r(7)),i=r(3),c=r(4),l=r(6),d=r(5),u=r(2),p=r.n(u),b=r(0),g=new p.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),h=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(i.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).promote=function(){g.update(e.props.id,{"T Well Spent?":e.props.val}).then((function(t){console.log("Rating "+e.props.id+"with "+e.props.val),console.log(t)}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/"+e.props.id)},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return e.promote()},className:"w-full px-1 py-1 border-gray-50 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs border-r border-t border-b text-gray-200 "+(this.props.rating===this.props.val?"bg-gray-50":"")+" "+this.props.style,children:this.props.val})})}}]),r}(o.Component),y=new p.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),v=(new Date).toISOString().substring(0,10);String.prototype.toHHMM=function(){var e=parseInt(this,10),t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60),o=e-3600*t-60*r;return t<10&&(t="0"+t),r<10&&(r="0"+r),o<10&&(o="0"+o),t+":"+r};var x=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(i.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).replan=function(){var t=document.getElementById(e.props.id);console.log(e.props.name+" "+e.props.promotion),t.style.opacity="0.2",y.create({fields:{"What?":e.props.what_id,Context:"Leisure","exec-date":v,"Group #":5}}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.delete=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",y.delete(e.props.id).then((function(e){console.log(e),t.style.borderColor="red",t.style.borderWidth="medium"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwO8FxxQGtiJGwTh/"+e.props.id)},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-4 hover:border-gray-300 m-2 text-left border "+(this.props.promotion>0?"opacity-25":""),id:this.props.id,children:[Object(b.jsx)("div",{className:"grid",children:Object(b.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(b.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(b.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(b.jsxs)("div",{children:[this.props.notes," ","undefined"!==typeof this.props.duration?this.props.duration.toString().toHHMM():""]}),Object(b.jsxs)("div",{className:"grid grid-cols-3 mt-2",children:[Object(b.jsx)("button",{onClick:function(){return e.delete()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Delete"}),Object(b.jsx)("button",{onClick:function(){return e.replan()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Replan"}),Object(b.jsx)("button",{onClick:function(){return e.openInAt()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Airtable"})]}),Object(b.jsxs)("div",{className:"grid grid-cols-8 mt-2",children:[Object(b.jsx)(h,{val:"1",id:this.props.id,rating:this.props.rating,style:"rounded-l-lg border-l"}),Object(b.jsx)(h,{val:"2",id:this.props.id,rating:this.props.rating}),Object(b.jsx)(h,{val:"3",id:this.props.id,rating:this.props.rating}),Object(b.jsx)(h,{val:"4",id:this.props.id,rating:this.props.rating}),Object(b.jsx)(h,{val:"5",id:this.props.id,rating:this.props.rating}),Object(b.jsx)(h,{val:"6",id:this.props.id,rating:this.props.rating}),Object(b.jsx)(h,{val:"7",id:this.props.id,rating:this.props.rating}),Object(b.jsx)(h,{val:"8",id:this.props.id,style:"rounded-r-lg"})]})]})})}}]),r}(o.Component),f=new p.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function m(e){var t=Object(o.useState)({}),r=Object(s.a)(t,2),n=r[0],a=r[1];return Object(o.useEffect)((function(){f.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){a(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(n),console.log("Testing "+e.cycle),Object(b.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2",children:n.length>0?n.map((function(e){return Object(b.jsx)(x,{name:e.fields.what_string,id:e.id,endorsed:e.fields.Promotion,notes:e.fields["Learning points"],what_id:e.fields["What?"],rating:e.fields["T Well Spent?"],group:e.fields["Group #"],duration:e.fields["Rough time spent (mins)"]},e.id)})):Object(b.jsx)("p",{children:"Fetching activity-coach if any uncompleted..."})})}var j=new p.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),w=(new Date).toISOString().substring(0,10),O=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var o;return Object(i.a)(this,r),(o=t.call(this,e)).rateToday=function(e){console.log("Rating today"),o.setState({value:e});for(var t=function(t){o.state.activities[t].fields["exec-date"]!==w&&j.update(o.state.activities[t].id,{"T Well Spent?":e.toString()}).then((function(r){console.log("Rating "+o.state.activities[t].id+" a "+e),console.log(r)}))},r=0;r<o.state.activities.length;r++)t(r)},o.state={activities:[]},o}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this;j.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(t){e.setState({activities:t.records})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"w-full p-2",children:[Object(b.jsx)("h1",{className:"font-medium text-black text-2xl mb-1",children:"Did you spend yesterday well?"}),Object(b.jsxs)("div",{className:"grid grid-cols-8",children:[Object(b.jsx)("button",{onClick:function(){return e.rateToday(1)},className:"rounded-l-lg border-l w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(1===this.state.value?"bg-gray-100":""),children:"1"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(2)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(2===this.state.value?"bg-gray-100":""),children:"2"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(3)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(3===this.state.value?"bg-gray-100":""),children:"3"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(4)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(4===this.state.value?"bg-gray-100":""),children:"4"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(5)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(5===this.state.value?"bg-gray-100":""),children:"5"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(6)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(6===this.state.value?"bg-gray-100":""),children:"6"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(7)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(7===this.state.value?"bg-gray-100":""),children:"7"}),Object(b.jsx)("button",{onClick:function(){return e.rateToday(8)},className:"rounded-r-lg w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(8===this.state.value?"bg-gray-100":""),children:"8"})]})]})}}]),r}(o.Component);var k=function(e){var t=Object(o.useState)({}),r=Object(s.a)(t,2),n=r[0],a=r[1];return console.log(n),Object(b.jsx)("div",{className:"grid mx-auto max-w-5xl",children:Object(b.jsxs)("div",{className:"grid place-items-center",children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{reRun:a})]})})};a.a.render(Object(b.jsx)(k,{tasks:[]}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f1c83efe.chunk.js.map