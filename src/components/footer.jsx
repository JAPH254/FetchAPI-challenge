function Footer(){
    const year=new Date().getFullYear();
    return(
        <div className="foot" style={{gap:"7rem" ,justifyContent:"center", alignItems:"center", display:"flex",borderTop:"1px solid"}}>
        <p>Waplink Corporation limited</p>
        <p>© {year}</p>
        <p> All Rights Reserved</p>
        </div>
    );
}

export default Footer