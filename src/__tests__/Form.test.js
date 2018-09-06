import React from "react";
import Form from "../Form.jsx";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});


const updateInput = (wrapper, instance, newValue) => {
    //Find instance of input
    const input = wrapper.find(instance);
    //Simultate Change on aforementioned input
    input.simulate("change", {
        currentTarget: {value: newValue}
    });
    //Find the input again as opposed to returning the input.
    //Seems you have to find the input AGAIN for the test to work.
    return input.find(instance);
};
describe("<Form/>", () => {
    it("should be optedIn by default", () => {
        const wrapper = shallow(<Form/>);
        expect(wrapper.find('[data-testid="checked"]').props().checked).toBe(true);
    });

    it("should change input values on user input", () => {
        const wrapper = shallow(<Form/>);
        const nameInput = wrapper.find("[data-testid='name']");
        nameInput.simulate("change", {
            currentTarget: {value: "BatmanIsHere"}
        });
        expect(wrapper.find("[data-testid='name']").props().value).toBe("BatmanIsHere");        
    });

    it("should uncheck on click", () => {
        const wrapper = shallow(<Form/>);
        const checkInput = wrapper.find('[data-testid="checked"]');
        expect(checkInput.props().checked).toBe(true);
        checkInput.simulate("click");
        expect(wrapper.find("[data-testid='checked']").props().checked).toBe(false);
    });

    it("should clear the form on submit", () => {
        //For Mocking stuff
        //jest.spyOn(api, "addUser").mockImplementation(() => Promise.resolve({data: "New User Added"}));

        const wrapper = shallow(<Form/>);
        wrapper.find('[data-testid="name"]').simulate("change", {
            currentTarget: {value: "BatmanIsHere"}
        });
        expect(wrapper.find("[data-testid='name']").props().value).toBe("BatmanIsHere");        

        //Second argument provides the event object and it needs to be present b/c of the presence of the preventDefault call in the implementation.
        wrapper.find("[data-testid='addUserForm']").simulate("submit", {
            preventDefault: () => {}
        });
        expect(wrapper.find("[data-testid='name']").props().value).toBe("");        
    });

    it("should match the <Form/> snapshot", () => {        
        const wrapper = shallow(<Form/>);
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});