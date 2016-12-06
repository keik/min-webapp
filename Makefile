TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

NPM=$(shell npm bin)

.PHONY: build start watch bundle-watch clean

build: clean lint test bundle
	@echo $(TAG)$@$(END)

start:
	@echo $(TAG)$@$(END)
	NODE_ENV=production node lib/server

watch:
	@echo $(TAG)$@$(END)
	mkdir -p bundle
	$(MAKE) -j start bundle-watch

bundle-watch:
	@echo $(TAG)$@$(END)
	mkdir -p bundle
	NODE_ENV=development $(NPM)/watchify -vd \
	  -e lib/client/main1.js -e lib/client/main2.js \
	  -t babelify \
	  -p [ factor-bundle -o bundle/bundle1.js -o bundle/bundle2.js ] \
	  -p browserify-hmr \
	  -o bundle/common.js

lint:
	@echo $(TAG)$@$(END)
	$(NPM)/eslint 'lib/**/*.js'

clean:
	@echo $(TAG)$@$(END)
	rm -rf bundle
