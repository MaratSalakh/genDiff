install_deps:
	npm ci

lint:
	npx eslint .

test:
	npx -n --experimental-vm-modules jest