import Header from '../Header'
export default meta => ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
