return typeof dataLayer !== 'undefined' && (dataLayer.filter(function(v, i) {
    return typeof v.pageType !== 'undefined';
})[0] || []).pageType == "homepage";
