UPDATE user_entries
  SET date = $1,
        time = $2,
        location = $3,
        who = $4,
        why= $5,
        breakfast = $6,
        lunch = $7,
        dinner = $8,
        cocktails = $9,
        golf = $10,
        office_supplies = $11,
        other = $12.
        beg_miles = $13,
        end_miles = $14
  WHERE id = $15      
