install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci

lint:
	npx eslint .

test:
	npx -n --experimental-vm-modules jest

test-coverage: 
	npx jest --coverage