const switchToPage = (page) => {
    const currentAdress = window.location.href
    let mySplitStr = currentAdress.split('/')
    mySplitStr[3] = page
    console.log(mySplitStr)
    const adrss = mySplitStr.join("/");
    window.location.replace(adrss)
}

export { switchToPage };