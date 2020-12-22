function TabResults (props){
    const starShips = props.tabs.map((p, index)=>{
    const handleClick=(e)=>{
        
        console.log("You are saving tab number "+e.target.value)
    }

       const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
        
        return <div className="starShips" key={index}>
               <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
               <h2 className='artist'> by: {p.artist.name}</h2>
               <button className='btn-success' type="button"  value={p.id} onClick={handleClick}>Save Tab!</button >
              </div>
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default TabResults;