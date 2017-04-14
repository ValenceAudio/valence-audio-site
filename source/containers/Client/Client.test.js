import Subject from "./Client";

describe("<Portfolio /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <div> with class client", () => {
    expect(wrapper.is("div.client")).toEqual(true)
  });

});
