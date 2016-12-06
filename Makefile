TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

NPM=$(shell npm bin)

.PHONY: build start watch bundle-watch clean

build: clean lint test bundle
	@echo $(TAG)$@$(END)

start:
	@echo $(TAG)$@$(END)
	NODE_ENV=production http-server

watch:
	@echo $(TAG)$@$(END)
	mkdir -p bundle
	$(MAKE) -j start bundle-watch

bundle-watch:
	@echo $(TAG)$@$(END)
	mkdir -p bundle
	NODE_ENV=development $(NPM)/watchify -vd -p browserify-hmr index.js -o bundle/bundle.js

clean:
	@echo $(TAG)$@$(END)
	rm -rf bundle
