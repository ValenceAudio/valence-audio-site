import Subject from "./Services";

describe("<Services /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <section> with class services", () => {
    expect(wrapper.is("section.services")).toEqual(true)
  });

});
