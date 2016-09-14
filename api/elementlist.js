
var ApiGen = ApiGen || {};
ApiGen.elements = [["f","append_class_to_parameters()"],["f","array_key_unshift()"],["f","array_value()"],["f","array_value()"],["f","browser()"],["f","build_properties_hint()"],["f","cache()"],["f","call_static_func()"],["f","collection()"],["f","compare()"],["f","component_to_string()"],["f","copydir()"],["f","debugr()"],["f","debugr()"],["f","deprecated()"],["f","deprecated()"],["f","dump()"],["f","dump()"],["f","equal_properties()"],["f","equals()"],["f","error()"],["f","error()"],["f","explode_xml_parameters()"],["f","extend_include_path()"],["f","extend_time_limit()"],["f","extract_element()"],["f","extract_logical_operator()"],["f","file_extension()"],["f","filter()"],["f","format_parsetime()"],["f","get_public_methods()"],["f","get_public_vars()"],["f","getClientIp()"],["f","getDatabase()"],["f","getRepository()"],["f","human_implode()"],["f","image()"],["f","imagecreatefrombmp()"],["f","implode_xml_parameters()"],["f","is_assoc()"],["f","is_closure()"],["f","is_component()"],["f","is_indexed()"],["f","is_valid()"],["f","is_valid_component()"],["f","iterator_keys()"],["f","iterators_to_arrays()"],["f","javascript_once()"],["f","merge_headers()"],["f","mimetype()"],["f","mkdirs()"],["f","mtime_folders()"],["f","notice()"],["f","notice()"],["f","once()"],["f","partial_var_export()"],["f","quoted_human_implode()"],["f","quoted_implode()"],["f","redirect()"],["f","reflect_properties()"],["f","render()"],["f","render_file()"],["f","report_exception()"],["f","report_exception()"],["f","rmdir_contents()"],["f","rmdir_recursive()"],["f","safe_unlink()"],["f","select()"],["f","sem_key()"],["f","send_headers()"],["f","set_object_vars()"],["c","Sledgehammer\\Core\\Cache"],["c","Sledgehammer\\Core\\CacheWrapper"],["c","Sledgehammer\\Core\\Collection"],["c","Sledgehammer\\Core\\Csv"],["c","Sledgehammer\\Core\\Curl"],["c","Sledgehammer\\Core\\Database\\Connection"],["c","Sledgehammer\\Core\\Database\\DatabaseCollection"],["c","Sledgehammer\\Core\\Database\\PreparedStatement"],["c","Sledgehammer\\Core\\Database\\SessionHandler"],["c","Sledgehammer\\Core\\Database\\Sql"],["c","Sledgehammer\\Core\\Database\\Statement"],["c","Sledgehammer\\Core\\Debug\\Autoloader"],["c","Sledgehammer\\Core\\Debug\\DebugR"],["c","Sledgehammer\\Core\\Debug\\Dump"],["c","Sledgehammer\\Core\\Debug\\ErrorHandler"],["c","Sledgehammer\\Core\\Debug\\Logger"],["c","Sledgehammer\\Core\\Debug\\PhpAnalyzer"],["c","Sledgehammer\\Core\\Debug\\PhpTokenizer"],["c","Sledgehammer\\Core\\EventEmitter"],["c","Sledgehammer\\Core\\Framework"],["c","Sledgehammer\\Core\\Html"],["c","Sledgehammer\\Core\\HtmlTokenizer"],["c","Sledgehammer\\Core\\HttpAuthentication"],["c","Sledgehammer\\Core\\InfoException"],["c","Sledgehammer\\Core\\Json"],["c","Sledgehammer\\Core\\Object"],["c","Sledgehammer\\Core\\PropertyPath"],["c","Sledgehammer\\Core\\Readonly"],["c","Sledgehammer\\Core\\Singleton"],["c","Sledgehammer\\Core\\Stopwatch"],["c","Sledgehammer\\Core\\TagIterator"],["c","Sledgehammer\\Core\\Text"],["c","Sledgehammer\\Core\\Url"],["c","Sledgehammer\\Core\\Util\\CodeAnalysisTest"],["c","Sledgehammer\\Core\\Util\\CompareEnvironments"],["c","Sledgehammer\\Core\\Util\\FlushCache"],["c","Sledgehammer\\Core\\Util\\GenerateStaticAutoLoader"],["c","Sledgehammer\\Core\\Util\\PearInstaller"],["c","Sledgehammer\\Core\\Util\\RequiredPhpExtensionsTest"],["c","Sledgehammer\\Core\\Wrapper"],["c","Sledgehammer\\Graphics\\Canvas"],["c","Sledgehammer\\Graphics\\Composition"],["c","Sledgehammer\\Graphics\\Graphics"],["c","Sledgehammer\\Graphics\\Image"],["c","Sledgehammer\\Graphics\\TextGraphics"],["c","Sledgehammer\\Graphics\\ThumbnailFolder"],["c","Sledgehammer\\Graphics\\TrueTypeFont"],["c","Sledgehammer\\Graphics\\Video"],["c","Sledgehammer\\Mvc\\Component"],["c","Sledgehammer\\Mvc\\Component\\Alert"],["c","Sledgehammer\\Mvc\\Component\\Breadcrumbs"],["c","Sledgehammer\\Mvc\\Component\\Button"],["c","Sledgehammer\\Mvc\\Component\\DescriptionList"],["c","Sledgehammer\\Mvc\\Component\\Dialog"],["c","Sledgehammer\\Mvc\\Component\\Element"],["c","Sledgehammer\\Mvc\\Component\\Form"],["c","Sledgehammer\\Mvc\\Component\\Headers"],["c","Sledgehammer\\Mvc\\Component\\HttpError"],["c","Sledgehammer\\Mvc\\Component\\Input"],["c","Sledgehammer\\Mvc\\Component\\Nav"],["c","Sledgehammer\\Mvc\\Component\\Pagination"],["c","Sledgehammer\\Mvc\\Component\\Template"],["c","Sledgehammer\\Mvc\\Controller"],["c","Sledgehammer\\Mvc\\CrudFolder"],["c","Sledgehammer\\Mvc\\Document"],["c","Sledgehammer\\Mvc\\Document\\File"],["c","Sledgehammer\\Mvc\\Document\\Jsonp"],["c","Sledgehammer\\Mvc\\Document\\Page"],["c","Sledgehammer\\Mvc\\Document\\Proxy"],["c","Sledgehammer\\Mvc\\Document\\Redirect"],["c","Sledgehammer\\Mvc\\Document\\Xml"],["c","Sledgehammer\\Mvc\\Folder"],["c","Sledgehammer\\Mvc\\Import"],["c","Sledgehammer\\Mvc\\Website"],["c","Sledgehammer\\Orm\\ActiveRecord"],["c","Sledgehammer\\Orm\\Backend\\ArrayRepositoryBackend"],["c","Sledgehammer\\Orm\\Backend\\DatabaseRepositoryBackend"],["c","Sledgehammer\\Orm\\Backend\\RepositoryBackend"],["c","Sledgehammer\\Orm\\Behavior\\ModelBehavior"],["c","Sledgehammer\\Orm\\Behavior\\SoftDeleteBehavior"],["c","Sledgehammer\\Orm\\BelongsToPlaceholder"],["c","Sledgehammer\\Orm\\CollectionView"],["c","Sledgehammer\\Orm\\HasManyPlaceholder"],["c","Sledgehammer\\Orm\\Inflector"],["c","Sledgehammer\\Orm\\Junction"],["c","Sledgehammer\\Orm\\ModelConfig"],["c","Sledgehammer\\Orm\\Repository"],["c","Sledgehammer\\Orm\\RepositoryCollection"],["c","Sledgehammer\\Orm\\RepositoryCollectionIterator"],["c","Sledgehammer\\Orm\\SimpleRecord"],["f","statusbar()"],["f","su_exec()"],["f","sudo()"],["f","syntax_highlight()"],["f","text()"],["f","tidy_id()"],["f","urlencode_path()"],["f","value()"],["f","value()"],["f","warning()"],["f","warning()"],["f","write_ini_file()"],["f","xmlentities()"]];
