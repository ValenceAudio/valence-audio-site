import Subject from "./TextInput";

const mockName = "Test";

describe("<TextInput /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject name={mockName} />);
  });

  const wrapper = shallow(<Subject name={mockName} />)

  it("renders as a div with class form-group", () => {
    expect(wrapper.is("div.form-group")).toEqual(true)
  });

  it("renders as a single <input> with class form-control", () => {
    expect(wrapper.find("input.form-control")).toHaveLength(1)
  });

  it("renders as a single <p> with class help-block", () => {
    expect(wrapper.find("p.help-block")).toHaveLength(1)
  });

  it("renders as a single <p> with class help-block", () => {
    expect(wrapper.find("p.help-block")).toHaveLength(1)
  });

  it("renders proper asterisks when required", () => {
    const requiredWrapper = shallow(<Subject name={mockName} required />)
    const expectedText = `Your ${mockName} *`
    expect(requiredWrapper.find('input.form-control')
    .props().placeholder).toEqual(expectedText)
  });

  it("renders proper asterisks when required", () => {
    const expectedName = `Your ${mockName} *`
    const overrideWrapper = shallow(<Subject name={mockName} nameOverride={expectedName} required />)

    expect(overrideWrapper.find('input.form-control')
    .props().name).toEqual(expectedName)
  });

});
