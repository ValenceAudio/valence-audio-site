import Subject from "./Portfolio";

describe("<Portfolio /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <section> with class portfolio", () => {
    expect(wrapper.is("section.portfolio")).toEqual(true)
  });

});
