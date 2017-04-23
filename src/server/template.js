export default ({ body, title }) => {
	return `
		<!DOCTYPE html>
		<html lang="ja">
		<head>
			<meta charset="UTF-8" />
			<title>${title}</title>
		</head>
		<body>
			<div id="root">${body}</div>
			<script src="/js/bundle.js"></script>
		</body>
		</html>
	`;
};