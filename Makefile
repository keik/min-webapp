TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

NPM=$(shell npm bin)
JSC=$(NPM)/webpack

JSCOV=$(NPM)/nyc
JSCOVFLAGS=-i babel-register --all --include "lib/**" --exclude "lib/{**/*.test.js,server/index.js}"
JST=$(NPM)/tape
JSTW=$(NPM)/tape-watch
JSTFLAGS=-r babel-register

.PHONY: build start watch clean

build: clean lint test
	@echo $(TAG)$@$(END)

start:
	@echo $(TAG)$@$(END)
	NODE_ENV=production node lib/server

watch: clean
	@echo $(TAG)$@$(END)
	$(JSC) --watch

test-watch:
	$(JSTW) $(JSTFLAGS) "lib/**/*.test.js" -v

cov:
	$(JSCOV) $(JSCOVFLAGS) $(JST) "lib/**/*.test.js"

test:
	$(JST) $(JSTFLAGS) "lib/**/*.test.js"

lint:
	@echo $(TAG)$@$(END)
	$(NPM)/eslint "lib/**/*.js"

clean:
	@echo $(TAG)$@$(END)
	rm -rf build
