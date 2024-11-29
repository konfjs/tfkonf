import { TerraformConfig, TerraformResource } from "tfs";
export interface CsvClassifier {
  allow_single_column?: boolean;
  contains_header?: string;
  custom_datatype_configured?: boolean;
  custom_datatypes?: string[];
  delimiter?: string;
  disable_value_trimming?: boolean;
  header?: string[];
  quote_symbol?: string;
}
export interface GrokClassifier {
  classification: string;
  custom_patterns?: string;
  grok_pattern: string;
}
export interface JsonClassifier {
  json_path: string;
}
export interface XmlClassifier {
  classification: string;
  row_tag: string;
}
export interface AwsGlueClassifierArgs {
  name: string;
  csv_classifier: CsvClassifier;
  grok_classifier: GrokClassifier;
  json_classifier: JsonClassifier;
  xml_classifier: XmlClassifier;
}
export class aws_glue_classifier extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueClassifierArgs) {
    super(config, "resource", args, resourceName, "aws_glue_classifier");
  }
}