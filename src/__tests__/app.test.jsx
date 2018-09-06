import React from "react";
import ReactDOM from "react-dom";
import App, {Link} from "../App.jsx";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

configure({adapter: new Adapter()});

describe("<App/>", () => {
    it("should render the App", () => {
        const wrapper = shallow(<App/>, {context: {}, disableLifecycleMethods: true});
        console.log(wrapper.debug());
    });

    it("should contain 2 p elements", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("p").length).toBe(2);
    });

    it("should contain an element with className = block__element--modifier", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".block__element--modifier").exists()).toBe(true);
    });

    it("should have a list with three elements", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("ul").children().length).toBe(3);
    });

    it("should find an element with alt='logo'", () => {
        const wrapper = shallow(<App/>);

        //Find by xpath-ish thing.
        expect(wrapper.find('[alt="logoishere"]').exists()).toBe(true);

        //Find by property
        expect(wrapper.find({alt: "logoishere"}).exists()).toBe(true);
    });

    it("should match the snapshot", () => {
        const tree = shallow(<App/>);
        expect(toJSON(tree)).toMatchSnapshot();
    });

    it("on input change, title changes text.", () => {
        //DO A REFIND TEST AND A NON-REFIND TEST
        const wrapper = shallow(<App/>);
        const input = wrapper.find("input[type='text']");
        expect(wrapper.find("h2").text()).toBe("");
        input.simulate("change", {currentTarget: {value: "Input changed due to simulate change."}});
        expect(wrapper.find("h2").text()).toBe("Input changed due to simulate change.");
    })

    it("should change className based on the state", () => {
        //wrapper.setState() forces re-render
        //for testing when the DOM is based on the state.
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".blue").length).toBe(1);
        expect(wrapper.find(".red").length).toBe(0);
        wrapper.setState({mainColor: "red"});
        expect(wrapper.find(".blue").length).toBe(0);
        expect(wrapper.find(".red").length).toBe(1);        
    });

    describe("React Life Cycle Methods", () => {
        it("calls componentDidMount, updates 'data-testid='lifeCycleMethod' to 'componentDidMount'.", () => {
            jest.spyOn(App.prototype, "componentDidMount");
            const wrapper = shallow(<App/>);        
            expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
            expect(wrapper.find('[data-testid="lifeCycleMethod"]').text()).toBe("componentDidMount");
    
        });
    
        it("calls componentWillReceiveProps", () => {
            jest.spyOn(App.prototype, "componentWillReceiveProps");
            expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(0);
            const wrapper = shallow(<App/>);
            wrapper.setProps({hide: true});
            expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
            expect(wrapper.find("[data-testid='lifeCycleMethod']").text()).toBe("componentWillReceiveProps");
        });
    });  

    it("testing <App/> handleStrings(str) helper/class method", () => {
        const wrapper = shallow(<App/>);
        const falseReturn = wrapper.instance().handleString("");
        const trueReturn = wrapper.instance().handleString("Hello World");
        expect(falseReturn).toBe(false);
        expect(trueReturn).toBe(true);
    });
});

describe("<Link/>", () => {
    it("Testing that the Link component gets an 'address' prop with value https://engadget.com", () => {        
        const wrapper = shallow(<Link address = "https://engadget.com"/>);
        expect(wrapper.instance().props.address).toBe("https://engadget.com");        
    });

    it("Testing that the rendered Link Component has a property 'href' of 'https://engadget.com'", () => {
        const wrapper = shallow(<Link address = "https://engadget.com"/>);
        expect(wrapper.props().href).toBe("https://engadget.com");
    });

    it("returns null when there's a 'hide' property.", () => {
        const wrapper = shallow(<Link hide = {false}/>);
        expect(wrapper.find("a").length).toBe(1);
        wrapper.setProps({hide: true});
        expect(wrapper.get(0)).toBeNull();
    });
    
    it("on button click changes p text", () => {
        const wrapper = shallow(<App/>);
        const button = wrapper.find("button");
        expect(wrapper.find(".button-state").text()).toBe("Unclicked.");
        button.simulate("click");
        expect(wrapper.find(".button-state").text()).toBe("Clicked.");
    });
});



