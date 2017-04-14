import Subject from "./Header";

describe("<Header /> structure", () => {

  it("renders without crashing", () => {
    shallow(<Subject  />);
  });

  const wrapper = shallow(<Subject />)

  it("renders as a <header> with class header", () => {
    expect(wrapper.is("header.header")).toEqual(true)
  });

});
