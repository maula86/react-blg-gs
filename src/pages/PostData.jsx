const PostData =  ({data}) => {
    return (
        <>
        {data?.map((item) => {
            return (
                <div className="prose" key={item.id} dangerouslySetInnerHTML={{ __html: `${item.post_content}` }} />
            )
        })}
        {/* <div className="prose" dangerouslySetInnerHTML={{ __html: `${data}` }} /> */}
        </>
    )
}

export default PostData