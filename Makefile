TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

NPM=$(shell npm bin)

JSC=$(NPM)/browserify
JSCFLAGS=-t babelify

JSCW=$(NPM)/watchify
JSCWFLAGS=-t babelify -p browserify-hmr -v -d

JSCOV=$(NPM)/nyc
JSCOVFLAGS=-i babel-register --all --include "lib/**" --exclude "lib/{**/*.test.js,server/index.js}"

JST=$(NPM)/tape
JSTW=$(NPM)/tape-watch
JSTFLAGS=-r babel-register

all: build start

# run

.PHONY: start

start:
	@echo $(TAG)$@$(END)
	NODE_ENV="production" node lib/server

# watch

.PHONY: watch watch-client dev-server test-watch

watch:
	@echo $(TAG)$@$(END)
	NODE_ENV="development" $(MAKE) -j watch-client dev-server
watch-client:
	@echo $(TAG)$@$(END)
	mkdir -p build
	$(JSCW) $(JSCWFLAGS) -e lib/client/main.js -o build/main.js
dev-server:
	@echo $(TAG)$@$(END)
	rm -rf tmp
	$(NPM)/webpack --watch

test-watch:
	@echo $(TAG)$@$(END)
	$(JSTW) $(JSTFLAGS) "lib/**/*.test.js" -v

# build

.PHONY: build clean lint test

build: clean lint test build/main.js
	@echo $(TAG)$@$(END)
clean:
	@echo $(TAG)$@$(END)
	rm -rf build
lint:
	@echo $(TAG)$@$(END)
	$(NPM)/eslint "lib/**/*.js"
test:
	@echo $(TAG)$@$(END)
	NODE_ENV="test" $(JSCOV) $(JSCOVFLAGS) $(JST) "lib/**/*.test.js"
build/main.js: lib/client/main.js
	@echo $(TAG)$@$(END)
	mkdir -p build
	NODE_ENV="production" $(JSC) $(JSCFLAGS) -e $< -o $@
