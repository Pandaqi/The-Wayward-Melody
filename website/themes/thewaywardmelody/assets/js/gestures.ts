export enum SwipeDirection
{
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down"
}

export const addSwipeListener = (node:HTMLElement, callbackSwipe:Function, callbackClick:Function) =>
{
    let xDown = -1;
    let yDown = -1;

    const handleTouchStart = (ev:TouchEvent|MouseEvent) =>
    {
        const firstTouch = (ev instanceof TouchEvent) ? ev.touches[0] : (ev as MouseEvent);
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
        ev.preventDefault();
        return false;
    }

    const handleTouchEnd = (ev: TouchEvent | MouseEvent) => 
    {
        const neverStarted = xDown < 0 || yDown < 0;
        if(neverStarted) { return true; }

        const firstTouch = (ev instanceof TouchEvent) ? ev.touches[0] : (ev as MouseEvent);
        const xUp = firstTouch.clientX;
        const yUp = firstTouch.clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        xDown = -1;
        yDown = -1;

        const distMoved = Math.abs(xDiff) + Math.abs(yDiff);
        const MIN_DIST_NEEDED_FOR_SWIPE = 20
        if(distMoved < MIN_DIST_NEEDED_FOR_SWIPE)
        { 
            callbackClick();
            return false; 
        }

        ev.preventDefault();
        ev.stopPropagation();
        
        const dominantDirectionIsX = Math.abs(xDiff) > Math.abs(yDiff);
        if (dominantDirectionIsX) 
        {
            if (xDiff > 0) {
                callbackSwipe(SwipeDirection.RIGHT);
                return false;
            } else {
                callbackSwipe(SwipeDirection.LEFT);
                return false;
            } 
        }

        if (yDiff > 0) {
            callbackSwipe(SwipeDirection.DOWN);
            return false;
        } else { 
            callbackSwipe(SwipeDirection.UP);
            return false;
        }        
    }

    node.addEventListener('touchstart', handleTouchStart, false);
    node.addEventListener('touchend', handleTouchEnd, false);
    node.addEventListener('mousedown', handleTouchStart, false);
    node.addEventListener('mouseup', handleTouchEnd, false);
}
