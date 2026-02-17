# Changelog

## 1.0.0 (2026-02-17)


### New Features

* add aws provider ([#31](https://github.com/konfjs/tfkonf/issues/31)) ([40bf3b7](https://github.com/konfjs/tfkonf/commit/40bf3b7133c76765c48aa13be00f0271b07e57a3))
* add computed attributes as class properties ([#27](https://github.com/konfjs/tfkonf/issues/27)) ([78fa4f0](https://github.com/konfjs/tfkonf/commit/78fa4f0ebabeace81d7c303cdbacf8f0f753e523))
* computed attributes shouldn't be defined as interface property ([#23](https://github.com/konfjs/tfkonf/issues/23)) ([7b00eb0](https://github.com/konfjs/tfkonf/commit/7b00eb0fd3b58fe85884c0bd28bb9529d4a61b15))
* create named export barrel file ([#28](https://github.com/konfjs/tfkonf/issues/28)) ([64978d9](https://github.com/konfjs/tfkonf/commit/64978d9fff41b73846dac3c2170d1a0eea956dea))
* create provider schema and main generator ([#18](https://github.com/konfjs/tfkonf/issues/18)) ([af65791](https://github.com/konfjs/tfkonf/commit/af65791b6d8c136cc57430b61285eab867c8c691))
* finalize base resource api ([#65](https://github.com/konfjs/tfkonf/issues/65)) ([a5a1de9](https://github.com/konfjs/tfkonf/commit/a5a1de989983f8c9b728273b7006ac3e4e4409d0))
* generate interface for computed fields ([#74](https://github.com/konfjs/tfkonf/issues/74)) ([ca5dbcf](https://github.com/konfjs/tfkonf/commit/ca5dbcf66dde15fd3751f9407bbd4880f2a8990f))
* generate provider classes ([#19](https://github.com/konfjs/tfkonf/issues/19)) ([22608ba](https://github.com/konfjs/tfkonf/commit/22608ba608ec0e5731e8ea09b624ee07296223c9))
* generate provider classes ([#78](https://github.com/konfjs/tfkonf/issues/78)) ([f76e10d](https://github.com/konfjs/tfkonf/commit/f76e10d9eab08ff509a1bc3bcab501ed4ce50148))
* generate resource interface ([#20](https://github.com/konfjs/tfkonf/issues/20)) ([5770c44](https://github.com/konfjs/tfkonf/commit/5770c445f36b4e23f29357715a6c6fade53a6993))
* implement data resources, close [#4](https://github.com/konfjs/tfkonf/issues/4) ([#77](https://github.com/konfjs/tfkonf/issues/77)) ([dd6a993](https://github.com/konfjs/tfkonf/commit/dd6a9935b898d27dd4f104b4c0d0133693d62468))
* implement interface body ([#21](https://github.com/konfjs/tfkonf/issues/21)) ([6ec84fd](https://github.com/konfjs/tfkonf/commit/6ec84fd73facd67adaaa1d3e1621029ecde6d23a))
* implement resource attributes ([#75](https://github.com/konfjs/tfkonf/issues/75)) ([17a1f8b](https://github.com/konfjs/tfkonf/commit/17a1f8b97f99c52973d7c9f5eb6871503037f025))


### Bug Fixes

* add missing schema keys ([f38d895](https://github.com/konfjs/tfkonf/commit/f38d895ec784eb51054be53d413c7c0eea615917))
* change constructor param name to resourceName to avoid property conflict ([#26](https://github.com/konfjs/tfkonf/issues/26)) ([291c4d8](https://github.com/konfjs/tfkonf/commit/291c4d8711e1a31e968327aa5caf376a90fca8e7))
* generate computed interfaces ([#72](https://github.com/konfjs/tfkonf/issues/72)) ([84eecf7](https://github.com/konfjs/tfkonf/commit/84eecf729d919ab3cc78cfe19e6019339c0cd978))
* generate list types correctly ([#71](https://github.com/konfjs/tfkonf/issues/71)) ([9634165](https://github.com/konfjs/tfkonf/commit/9634165c30816a20ac32c2c31e08b38fe878a3c5))
* generate nested & repeated blocks correctly ([#73](https://github.com/konfjs/tfkonf/issues/73)) ([aab329e](https://github.com/konfjs/tfkonf/commit/aab329e0e38685b4076997f570087d289970a17a))
* generate optional blocks ([#70](https://github.com/konfjs/tfkonf/issues/70)) ([4e3c592](https://github.com/konfjs/tfkonf/commit/4e3c5921ee7d7c866ea6bb6178e852264aa617d0))
* generate unique interface name for child interfaces ([#34](https://github.com/konfjs/tfkonf/issues/34)) ([d126169](https://github.com/konfjs/tfkonf/commit/d126169f433814ffdd2b3cb8d164f23f1f1d65d9))
* handle all the different types of the schema correctly ([#22](https://github.com/konfjs/tfkonf/issues/22)) ([37e9776](https://github.com/konfjs/tfkonf/commit/37e9776f9eef1d9a6a3048f780d49824142cd9ee))
* handle resource references correctly ([#59](https://github.com/konfjs/tfkonf/issues/59)) ([ca41dde](https://github.com/konfjs/tfkonf/commit/ca41ddeebf79718ec8913feb2b486acce5585054))
* make timeout arguments optional ([#48](https://github.com/konfjs/tfkonf/issues/48)) ([aabbc3b](https://github.com/konfjs/tfkonf/commit/aabbc3b627bad4d3f8e0d0419bc25dddf5e9066c))
* mark optional attributes ([#24](https://github.com/konfjs/tfkonf/issues/24)) ([34851c6](https://github.com/konfjs/tfkonf/commit/34851c66c4c90a16a2c39e71dbaf4ae2da01403d))
* pascal case for one words ([#36](https://github.com/konfjs/tfkonf/issues/36)) ([eb2ae0e](https://github.com/konfjs/tfkonf/commit/eb2ae0eda33d9cea25a8a74728cd6ea6af30f585))
* **provider-generator:** make package commonjs ([#45](https://github.com/konfjs/tfkonf/issues/45)) ([d1ca0e2](https://github.com/konfjs/tfkonf/commit/d1ca0e2ef2c3f53a08f100ec9747a89132154364))
* **provider-generator:** npx command ([#42](https://github.com/konfjs/tfkonf/issues/42)) ([305aa4c](https://github.com/konfjs/tfkonf/commit/305aa4c3be54780139a861a68a4cb57532d50d94))
* **provider-generator:** remove dependency on core ([#40](https://github.com/konfjs/tfkonf/issues/40)) ([37e8260](https://github.com/konfjs/tfkonf/commit/37e8260e1fdfa82f357f62354881cee3cd8f281e))
* replace babel with ts-morph ([#67](https://github.com/konfjs/tfkonf/issues/67)) ([05892d4](https://github.com/konfjs/tfkonf/commit/05892d46cb72c67505b59827dab870d9b2cb76b4))
* update subclass types ([d5a83dd](https://github.com/konfjs/tfkonf/commit/d5a83dda30e64a6e1baaeb4c9597191460a60a5b))
* use pnpm as a package manager instead of bun ([#44](https://github.com/konfjs/tfkonf/issues/44)) ([d35d9c3](https://github.com/konfjs/tfkonf/commit/d35d9c3ea83d7345f5f41ce02a1fb790dc65ad2e))


### Chores

* **provider-generator:** version 0.0.2 ([#41](https://github.com/konfjs/tfkonf/issues/41)) ([a6fc960](https://github.com/konfjs/tfkonf/commit/a6fc960f18598acd164464f9003f37412affd1e1))
* **provider-generator:** version 0.1.2 ([#46](https://github.com/konfjs/tfkonf/issues/46)) ([16e4ce0](https://github.com/konfjs/tfkonf/commit/16e4ce08b4310ea8028c65182a043f70315f0b2a))
* ran npm pkg fix ([#37](https://github.com/konfjs/tfkonf/issues/37)) ([032099d](https://github.com/konfjs/tfkonf/commit/032099d5e4c3446719c9d690506df0f70d034367))
* set npm publish config ([#38](https://github.com/konfjs/tfkonf/issues/38)) ([dbc5425](https://github.com/konfjs/tfkonf/commit/dbc54250f82e3d1a7ec34c2d920e752bc076989b))
* split provider schema generator to its own dir ([#32](https://github.com/konfjs/tfkonf/issues/32)) ([e837793](https://github.com/konfjs/tfkonf/commit/e837793c0bd6b50c5afe8b2e5f47ea8e8d42ed7f))
* transfer to org ([#39](https://github.com/konfjs/tfkonf/issues/39)) ([2caf886](https://github.com/konfjs/tfkonf/commit/2caf88642e8998cd75a61699be6e3f783c91baa9))
* typescript monorepo setup ([#17](https://github.com/konfjs/tfkonf/issues/17)) ([470d658](https://github.com/konfjs/tfkonf/commit/470d6581c6427cd603635698327b1d90e80983d7))
* update generator output dir ([#29](https://github.com/konfjs/tfkonf/issues/29)) ([b78dd78](https://github.com/konfjs/tfkonf/commit/b78dd78be3c50f0ddbbb220e41e5f4e01a270b46))
* update provider schema descriptions, sync with docs ([e68f98d](https://github.com/konfjs/tfkonf/commit/e68f98dd280828d64a262454a04efa168b01b1d1))
* use consistent tsconfig ([#33](https://github.com/konfjs/tfkonf/issues/33)) ([4885dc4](https://github.com/konfjs/tfkonf/commit/4885dc494c7d2f808c5941acf0b1d42ef1740ed5))
* version 0.2.0 ([#80](https://github.com/konfjs/tfkonf/issues/80)) ([6cb85c6](https://github.com/konfjs/tfkonf/commit/6cb85c62782f2d29d5d15984c1728b15096545f5))
* version 0.2.1 ([086c0b0](https://github.com/konfjs/tfkonf/commit/086c0b0584d55c6d10021a98f9f9b00fdd5c6275))


### Dependencies

* bump commander from 13.1.0 to 14.0.1 ([#155](https://github.com/konfjs/tfkonf/issues/155)) ([0e71078](https://github.com/konfjs/tfkonf/commit/0e710789a8f54a6446bd0f0421b583c54403d5c1))
* bump commander from 14.0.1 to 14.0.2 ([#186](https://github.com/konfjs/tfkonf/issues/186)) ([c3a74fc](https://github.com/konfjs/tfkonf/commit/c3a74fc775c6fe8d7f4d77fa6d424214fae8951b))
* bump commander from 14.0.2 to 14.0.3 ([#204](https://github.com/konfjs/tfkonf/issues/204)) ([9fa6d97](https://github.com/konfjs/tfkonf/commit/9fa6d97235a617e997ce2b504888ba94c3676bb8))
* bump commander in /packages/provider-generator ([#187](https://github.com/konfjs/tfkonf/issues/187)) ([1eb1f6b](https://github.com/konfjs/tfkonf/commit/1eb1f6b60fb9ede4a28b35c205356a8ddb249ffb))
* bump commander in /packages/provider-generator ([#89](https://github.com/konfjs/tfkonf/issues/89)) ([355ec7c](https://github.com/konfjs/tfkonf/commit/355ec7cef18b70bd5568d84a4597cfcf864afc07))
* bump ts-morph from 27.0.0 to 27.0.2 ([#169](https://github.com/konfjs/tfkonf/issues/169)) ([a7fa13b](https://github.com/konfjs/tfkonf/commit/a7fa13b14fb7075a72609e91ad183279d412bec5))
* bump ts-morph in /packages/provider-generator ([#154](https://github.com/konfjs/tfkonf/issues/154)) ([146f3d3](https://github.com/konfjs/tfkonf/commit/146f3d3e92487defa925c92c3bf7b07cd63a9797))
* bump ts-morph in /packages/provider-generator ([#88](https://github.com/konfjs/tfkonf/issues/88)) ([95a3306](https://github.com/konfjs/tfkonf/commit/95a330695303158b986a15f8e654deb0a18ae85d))
