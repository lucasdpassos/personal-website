
function PatternedBanner() {
  const bannerStyle = {
    backgroundColor: '#214664',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23242424' fill-opacity='0.36' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    height: '130px',
    position: 'absolute',
    top: 0,
    opacity: 0.4,
    left: 0,
    right: 0,
  // Para ficar por trás do conteúdo das rotas
  };

  return (
    <div style={bannerStyle}></div>
  );
}

export default PatternedBanner;
