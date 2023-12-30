export function truncateContent(content, length = 100) {
	if (content.length > length) {
		return content.substring(0, length) + "...";
	} else {
		return content;
	}
}
