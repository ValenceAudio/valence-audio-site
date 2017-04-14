import Subject from "./App";

describe("<App /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <div> with class app", () => {
    expect(wrapper.is("div.app")).toEqual(true)
  });

});
