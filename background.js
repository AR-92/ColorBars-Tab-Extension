console.log('console.log form backgroung script',chrome);
// chrome.tabs.getCurrent((a)=>{
//     console.log('chrome.tabs.getCurrent ',a)
// })

chrome.tabs.onCreated.addListener((a)=>{
    console.log('chrome.tabs.onCreated.addListener',a);
    if(a.pendingUrl=="chrome://newtab/"){
        console.log('jackPOt');
        // chrome.tabs.get(a.id, (s)=>{
        //     console.log('chrome.tabs.get ',s)
        // })
    };
})