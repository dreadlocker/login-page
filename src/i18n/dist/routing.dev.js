"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathname = exports.useRouter = exports.usePathname = exports.redirect = exports.Link = exports.routing = void 0;

var _routing = require("next-intl/routing");

var _navigation = require("next-intl/navigation");

var routing = (0, _routing.defineRouting)({
  // A list of all locales that are supported
  locales: ["en", "bg"],
  // Used when no locale matches
  defaultLocale: "en"
}); // Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

exports.routing = routing;

var _createNavigation = (0, _navigation.createNavigation)(routing),
    Link = _createNavigation.Link,
    redirect = _createNavigation.redirect,
    usePathname = _createNavigation.usePathname,
    useRouter = _createNavigation.useRouter,
    getPathname = _createNavigation.getPathname;

exports.getPathname = getPathname;
exports.useRouter = useRouter;
exports.usePathname = usePathname;
exports.redirect = redirect;
exports.Link = Link;