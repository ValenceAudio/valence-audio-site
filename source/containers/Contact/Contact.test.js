import Subject from "./Contact";

describe("<Contact /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <section> with class contact", () => {
    expect(wrapper.is("section.contact")).toEqual(true)
  });

});
