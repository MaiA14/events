(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){e.exports=n(59)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(18),r=n.n(o),l=(n(30),n(5)),c=n(6),s=n(8),u=n(7),d=n(9),m=n(13),h=n(10),f=n(15),p=(n(31),n(32),function(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("header",{className:"modal__header"},i.a.createElement("h1",null,e.title)),i.a.createElement("section",{className:"modal__content"},e.children),i.a.createElement("section",{className:"modal__actions"},e.canCancel&&i.a.createElement("button",{className:"btn",onClick:e.onCancel},"Cancel"),e.canConfirm&&i.a.createElement("button",{className:"btn",onClick:e.onConfirm},e.confirmText)))}),E=(n(33),function(e){return i.a.createElement("div",{className:"backdrop"})}),v=(n(34),function(){return i.a.createElement("div",{className:"spinner"},i.a.createElement("div",{className:"lds-dual-ring"}))}),g=(n(35),function(e){return i.a.createElement("li",{key:e.eventId,className:"events__list-item"},i.a.createElement("div",null,i.a.createElement("h1",null,e.title),i.a.createElement("h2",null,"$",e.price," - ",new Date(e.date).toLocaleDateString())),i.a.createElement("div",null,e.userId===e.creatorId?i.a.createElement("p",null,"You're the owner of this event."):i.a.createElement("button",{className:"btn",onClick:e.onDetail.bind(void 0,e.eventId)},"View Details")))}),b=(n(36),function(e){var t=e.events.map((function(t){return i.a.createElement(g,{key:t._id,eventId:t._id,title:t.title,price:t.price,date:t.date,userId:e.authUserId,creatorId:t.creator._id,onDetail:e.onViewDetail})}));return i.a.createElement("ul",{className:"event__list"},t)}),k=i.a.createContext({token:null,userId:null,login:function(e,t,n){},logout:function(){}}),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={creating:!1,events:[],isLoading:!1,selectedEvent:null},n.isActive=!0,n.startCreateEventHandler=function(){n.setState({creating:!0})},n.modalConfirmHandler=function(){n.setState({creating:!1});var e=n.titleElRef.current.value,t=+n.priceElRef.current.value,a=n.dateElRef.current.value,i=n.descriptionElRef.current.value;if(!(0===e.trim().length||t<=0||0===a.trim().length||0===i.trim().length)){var o={query:"\n          mutation CreateEvent(\n            $title: String!,\n             $desc: String!,\n              $price: Float!,\n               $date: String!) \n               {\n            createEvent(eventInput:\n               {\n                 title: $title,\n               description: $desc,\n                price: $price, date: $date}) \n                {\n              _id\n              title\n              description\n              date\n              price\n            }\n          }\n        ",variables:{title:e,desc:i,price:t,date:a}},r=n.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json",Authorization:"Bearer "+r}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){n.setState((function(t){var a=Object(f.a)(t.events);return a.push({_id:e.data.createEvent._id,title:e.data.createEvent.title,description:e.data.createEvent.description,date:e.data.createEvent.date,price:e.data.createEvent.price,creator:{_id:n.context.userId}}),{events:a}}))})).catch((function(e){console.log(e)}))}},n.modalCancelHandler=function(){n.setState({creating:!1,selectedEvent:null})},n.showDetailHandler=function(e){n.setState((function(t){return{selectedEvent:t.events.find((function(t){return t._id===e}))}}))},n.bookEventHandler=function(){if(n.context.token){var e={query:"\n          mutation BookEvent($id: ID!) {\n            bookEvent(eventId: $id) {\n              _id\n             createdAt\n             updatedAt\n            }\n          }\n        ",variables:{id:n.state.selectedEvent._id}};fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){n.setState({selectedEvent:null})})).catch((function(e){console.log(e)}))}else n.setState({selectedEvent:null})},n.titleElRef=i.a.createRef(),n.priceElRef=i.a.createRef(),n.dateElRef=i.a.createRef(),n.descriptionElRef=i.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this;this.setState({isLoading:!0});fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n          query {\n            events {\n              _id\n              title\n              description\n              date\n              price\n              creator {\n                _id\n                email\n              }\n            }\n          }\n        "}),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(t){var n=t.data.events;e.isActive&&e.setState({events:n,isLoading:!1})})).catch((function(t){console.log(t),e.isActive&&e.setState({isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,(this.state.creating||this.state.selectedEvent)&&i.a.createElement(E,null),this.state.creating&&i.a.createElement(p,{title:"Add Event",canCancel:!0,canConfirm:!0,onCancel:this.modalCancelHandler,onConfirm:this.modalConfirmHandler,confirmText:"Confirm"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"title"},"Title"),i.a.createElement("input",{type:"text",id:"title",ref:this.titleElRef})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"price"},"Price"),i.a.createElement("input",{type:"number",id:"price",ref:this.priceElRef})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"date"},"Date"),i.a.createElement("input",{type:"datetime-local",id:"date",ref:this.dateElRef})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"description"},"Description"),i.a.createElement("textarea",{id:"description",rows:"4",ref:this.descriptionElRef})))),this.state.selectedEvent&&i.a.createElement(p,{title:this.state.selectedEvent.title,canCancel:!0,canConfirm:!0,onCancel:this.modalCancelHandler,onConfirm:this.bookEventHandler,confirmText:this.context.token?"Book":"Confirm"},i.a.createElement("h1",null,this.state.selectedEvent.title),i.a.createElement("h2",null,"$",this.state.selectedEvent.price," -"," ",new Date(this.state.selectedEvent.date).toLocaleDateString()),i.a.createElement("p",null,this.state.selectedEvent.description)),this.context.token&&i.a.createElement("div",{className:"events-control"},i.a.createElement("p",{className:"events-description"},"Share your own events!"),i.a.createElement("button",{className:"btn",onClick:this.startCreateEventHandler},"Create event")),this.state.isLoading?i.a.createElement(v,null):i.a.createElement(b,{events:this.state.events,authUserId:this.context.userId,onViewDetail:this.showDetailHandler}))}}]),t}(a.Component);y.contextType=k;var C=y,S=(n(37),function(e){return i.a.createElement("ul",{className:"bookings__list"},e.bookings.map((function(t){return i.a.createElement("li",{key:t._id,className:"bookings__item"},i.a.createElement("div",{className:"bookings__item-data"},t.event.title," -"," ",new Date(t.createdAt).toLocaleDateString()),i.a.createElement("div",{className:"bookings__item-actions"},i.a.createElement("button",{className:"btn",onClick:e.onDelete.bind(void 0,t._id)},"Cancel")))})))}),N=n(22),w={Cheap:{min:0,max:100},Normal:{min:100,max:200},Expensive:{min:200,max:1e8}},_=function(e){var t={labels:[],datasets:[]},n=[],a=function(a){var i=e.bookings.reduce((function(e,t){return t.event.price>w[a].min&&t.event.price<w[a].max?e+1:e}),0);n.push(i),t.labels.push(a),t.datasets.push({fillColor:"#429a6d",strokeColor:"#2b8557",highlightFill:"#71c99c",highlightStroke:"#2b8557",data:n}),(n=Object(f.a)(n))[n.length-1]=0};for(var o in w)a(o);return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(N.Bar,{data:t}))},O=(n(50),function(e){return i.a.createElement("div",{className:"bookings-control"},i.a.createElement("button",{className:"list"===e.activeOutputType?"active":"",onClick:e.onChange.bind(void 0,"list")},"List"),i.a.createElement("button",{className:"chart"===e.activeOutputType?"active":"",onClick:e.onChange.bind(void 0,"chart")},"Chart"))}),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isLoading:!1,bookings:[],outputType:"list"},n.fetchBookings=function(){n.setState({isLoading:!0});fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n              query {\n                bookings {\n                  _id\n                 createdAt\n                 event {\n                   _id\n                   title\n                   date\n                   price\n                 }\n                }\n              }\n            "}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){var t=e.data.bookings;n.setState({bookings:t,isLoading:!1})})).catch((function(e){console.log(e),n.setState({isLoading:!1})}))},n.deleteBookingHandler=function(e){n.setState({isLoading:!0});var t={query:"\n              mutation CancelBooking($id: ID!) {\n                cancelBooking(bookingId: $id) {\n                _id\n                 title\n                }\n              }\n            ",variables:{id:e}};fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(t){n.setState((function(t){return{bookings:t.bookings.filter((function(t){return t._id!==e})),isLoading:!1}}))})).catch((function(e){console.log(e),n.setState({isLoading:!1})}))},n.changeOutputTypeHandler=function(e){"list"===e?n.setState({outputType:"list"}):n.setState({outputType:"chart"})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchBookings()}},{key:"render",value:function(){var e=i.a.createElement(v,null);return this.state.isLoading||(e=i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{activeOutputType:this.state.outputType,onChange:this.changeOutputTypeHandler}),i.a.createElement("div",null,"list"===this.state.outputType?i.a.createElement(S,{bookings:this.state.bookings,onDelete:this.deleteBookingHandler}):i.a.createElement(_,{bookings:this.state.bookings})))),i.a.createElement(i.a.Fragment,null,e)}}]),t}(a.Component);j.contextType=k;n(51);var x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLogin:!0},n.switchModeHandler=function(){n.setState((function(e){return{isLogin:!e.isLogin}}))},n.submitHandler=function(e){e.preventDefault();var t=n.emailEl.current.value,a=n.passwordEl.current.value;if(0!==t.trim().length&&0!==a.trim().length){var i={query:"\n        query Login($email: String!, $password: String!) {\n          login(email: $email, password: $password) {\n            userId\n            token\n            tokenExpiration\n          }\n        }\n      ",variables:{email:t,password:a}};n.state.isLogin||(i={query:"\n          mutation CreateUser($email: String!, $password: String!) {\n            createUser(userInput: {email: $email, password: $password}) {\n              _id\n              email\n            }\n          }\n        ",variables:{email:t,password:a}}),fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){e.data.login.token&&n.context.login(e.data.login.token,e.data.login.userId,e.data.login.tokenExpiration)})).catch((function(e){console.log(e)}))}},n.emailEl=i.a.createRef(),n.passwordEl=i.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{className:"auth-form",onSubmit:this.submitHandler},i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{type:"email",placeholder:"Email",className:"login-input",id:"email",ref:this.emailEl})),i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{type:"password",placeholder:"Password",id:"password",ref:this.passwordEl,className:"login-input"})),i.a.createElement("div",{className:"form-actions"},i.a.createElement("button",{type:"submit"},"Submit"),i.a.createElement("button",{type:"button",onClick:this.switchModeHandler},"Switch to ",this.state.isLogin?"Signup":"Login")))}}]),t}(a.Component);x.contextType=k;var T=x,I=(n(52),function(e){return i.a.createElement(k.Consumer,null,(function(e){return i.a.createElement("header",{className:"main-navigation"},i.a.createElement("div",{className:"main-navigation__logo"},i.a.createElement("h1",{className:"app-logo"},"Eventsys")),i.a.createElement("nav",{className:"main-navigation__items"},i.a.createElement("ul",null,!e.token&&i.a.createElement("li",null,i.a.createElement(m.b,{to:"/auth"},"Authenticate")),i.a.createElement("li",null,i.a.createElement(m.b,{to:"/events"},"Events")),e.token&&i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(m.b,{to:"/bookings"},"Bookings")),i.a.createElement("li",null,i.a.createElement("button",{onClick:e.logout},"Logout"))))))}))}),L=(n(58),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={token:null,userId:null},n.login=function(e,t,a){n.setState({token:e,userId:t})},n.logout=function(){n.setState({token:null,userId:null})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(k.Provider,{value:{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout}},i.a.createElement(I,null),i.a.createElement("main",{className:"main-content"},i.a.createElement(h.d,null,this.state.token&&i.a.createElement(h.a,{from:"/",to:"/events",exact:!0}),this.state.token&&i.a.createElement(h.a,{from:"/auth",to:"/events",exact:!0}),!this.state.token&&i.a.createElement(h.b,{path:"/auth",component:T}),i.a.createElement(h.b,{path:"/events",component:C}),this.state.token&&i.a.createElement(h.b,{path:"/bookings",component:j}),!this.state.token&&i.a.createElement(h.a,{to:"/auth",exact:!0}))))))}}]),t}(a.Component));r.a.render(i.a.createElement(L,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ef518052.chunk.js.map