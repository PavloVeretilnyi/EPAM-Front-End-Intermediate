export function createBlurredCoverElement(elementToCover) {

    const rect = elementToCover.getBoundingClientRect();


    const coverElement = document.createElement("div");

    coverElement.className = "cover";
    coverElement.style.position = "absolute";
    coverElement.style.top = `${rect.top + window.scrollY}px`;
    coverElement.style.left = `${rect.left + window.scrollX}px`;
    coverElement.style.width = `${rect.width}px`;
    coverElement.style.height = `${rect.height}px`;
    
    return coverElement;

}
