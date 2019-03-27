import bowser from 'bowser';

export const isNum = s => !Number.isNaN(parseInt(s, 10));

export const isHandheld = () => Boolean(bowser.mobile || bowser.tablet);

export const isIOS = () => Boolean(bowser.ios);

export const isAndroid = () => Boolean(bowser.android);

export const isEdge = () => Boolean(bowser.msedge);

export const isMobile = () => isHandheld();
