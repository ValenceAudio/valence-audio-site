import Subject from "./Navbar";

describe("<Navbar /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <nav> with class navbar", () => {
    expect(wrapper.is("nav.navbar")).toEqual(true)
  });

});
