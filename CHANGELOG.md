# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2019-03-28
### Added
- Standardized a changelog (use ```Keep a Changelog``` 1.0.0).
- Add ```Keep a Changelog``` badge.
- Add ```Semantic Versioning``` badge.

### Changed
- Add missing changelog logs.
- Enable unit test for jsdom and node.

## [1.1.0] - 2018-12-31
### Added
- Add defaults option to es6 builder.

## [1.0.4] - 2018-12-27
### Changed
- Only PR branch and master should trigger travis build.
- Clean CI travis build configuration.

## [1.0.3] - 2018-12-24 
### Added
- Add codecov.
### Fixed
- Add missing travis file to npm ignore.

## [1.0.2] - 2018-12-23
### Added
- Add Travis CI build.

## [1.0.1] - 2018-12-23
### Added
- Add badges in Readme file. 

## [1.0.0] - 2018-12-06
### Added
- Add shortcut import to es5 version.

### Changed
- Fix catalogues inconsistency.
- Give better names for es5 and es6 builders.

### Migration
- Change ```import { builderOf } from '@thecodeaware/ts-interface-builder/dist/simple/SimpleInterfaceBuilder';```
to ```import { builderOf } from '@thecodeaware/ts-interface-builder/dist/es5';```
