TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

NPM=$(shell npm bin)
JSC=$(NPM)/webpack

.PHONY: build start watch clean

build: clean lint
	@echo $(TAG)$@$(END)

start:
	@echo $(TAG)$@$(END)
	NODE_ENV=production node lib/server

watch: clean
	@echo $(TAG)$@$(END)
	$(JSC) --watch

lint:
	@echo $(TAG)$@$(END)
	$(NPM)/eslint "lib/**/*.js"

clean:
	@echo $(TAG)$@$(END)
	rm -rf build
