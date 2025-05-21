// Import xlsx plugin
import * as EXCEL from "xlsx";
import fs from "fs";

// Define test data structure
interface TestRecord {
  Username: string;
  Password: string;
}

// Create method to read excel file
export function readExcelFile(filePath: string) {
  // Read excel as binary string
  const file = fs.readFileSync(filePath);

  // parse into workbook
  const workbook = EXCEL.read(file);

  // Get first sheet
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convert sheet into JSON
  const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });

  // Convert raw data to TestRecord
  const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
    Username: column[0],
    Password: column[1],
  }));

  return records;
}
